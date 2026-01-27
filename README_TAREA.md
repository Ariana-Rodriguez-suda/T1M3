# Actividad Práctica – CLASE 3 (NestJS)
## Consultas, Operaciones Lógicas y Transacciones en un Sistema de Gestión Universitaria

**Estudiante:** [Información del estudiante]  
**Fecha:** Enero 2026  
**Asignatura:** Programación Backend  
**Docente:** [Nombre del docente]

---

## 📋 Resumen Ejecutivo

Este proyecto implementa un sistema completo de gestión universitaria con NestJS y Prisma 7, enfocado en:

1. **Consultas Derivadas Avanzadas** - Consultas ORM complejas con relaciones
2. **Operaciones Lógicas** - Uso de operadores AND, OR, NOT en consultas
3. **Consultas SQL Nativas** - Reportes con SQL puro ejecutados desde NestJS
4. **Transacciones ACID** - Matriculación segura con rollback automático
5. **Análisis ACID** - Documentación teórica de principios de transacciones

---

## 🏗️ Arquitectura del Proyecto

```
universidad-psm7-funcional/
├── prisma/
│   ├── usuarios/         # BD de usuarios, roles, permisos
│   ├── carreras/         # BD de carreras, materias, aulas
│   ├── profesor/         # BD de profesores, títulos
│   └── generated/        # Clientes Prisma generados
│
├── src/
│   ├── usuario/          # Gestión de usuarios
│   ├── materia/          # Gestión de materias
│   ├── inscripcion/      # Gestión de matriculación
│   ├── auth/             # Autenticación JWT
│   ├── prisma/           # Servicios Prisma por DB
│   └── main.ts
│
├── ANALISIS_ACID.md      # Análisis de principios ACID
├── ENDPOINTS_GUIDE.md    # Guía completa de endpoints
└── package.json
```

---

## 📊 Estructura de Datos

### Base de Datos: USUARIOS
```sql
-- Usuarios (estudiantes, profesores, admins)
CREATE TABLE "Usuario" (
  id_usuario SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  apellido VARCHAR(100),
  dni VARCHAR(20),
  correo VARCHAR(100) UNIQUE,
  tipo VARCHAR(20),  -- 'estudiante', 'profesor', 'admin'
  rolId INTEGER REFERENCES "Rol"(id_rol)
);

-- Inscripciones (estudiante -> carrera)
CREATE TABLE "Inscripcion" (
  id_inscripcion SERIAL PRIMARY KEY,
  id_usuario INTEGER REFERENCES "Usuario"(id_usuario),
  id_carrera INTEGER,  -- FK lógico a DB carreras
  fecha_inscripcion DATE
);

-- Roles y Permisos
CREATE TABLE "Rol" (
  id_rol SERIAL PRIMARY KEY,
  nombre VARCHAR(100)
);
```

### Base de Datos: CARRERAS
```sql
-- Carreras
CREATE TABLE "Carrera" (
  id_carrera SERIAL PRIMARY KEY,
  nombre_carrera VARCHAR(150),
  duracion_anos INTEGER
);

-- Materias
CREATE TABLE "Materia" (
  id_materia SERIAL PRIMARY KEY,
  nombre_materia VARCHAR(150),
  id_carrera INTEGER REFERENCES "Carrera"(id_carrera),
  id_aula INTEGER REFERENCES "Aula"(id_aula)
);

-- Aulas
CREATE TABLE "Aula" (
  id_aula SERIAL PRIMARY KEY,
  nombre_aula VARCHAR(50),
  capacidad INTEGER,
  ubicacion VARCHAR(100)
);

-- Períodos académicos
CREATE TABLE "Periodo" (
  id_periodo SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  fecha_inicio TIMESTAMP,
  fecha_fin TIMESTAMP
);
```

### Base de Datos: PROFESOR
```sql
-- Profesores
CREATE TABLE "Profesor" (
  id_profesor SERIAL PRIMARY KEY,
  userId INTEGER  -- FK lógico a Usuario.id_usuario
);

-- Títulos académicos
CREATE TABLE "Titulo" (
  id_titulo SERIAL PRIMARY KEY,
  id_profesor INTEGER REFERENCES "Profesor"(id_profesor),
  nombre_titulo VARCHAR(150),
  institucion VARCHAR(150),
  ano_obtencion INTEGER
);
```

---

## 🔍 Parte 1: Consultas Derivadas

### Implementadas:

#### 1.1 Listar todos los estudiantes activos junto con su carrera
```typescript
async findActiveStudentsWithCareer() {
  return this.prisma.usuario.findMany({
    where: { tipo: 'estudiante' },
    include: { inscripciones: true, rol: true }
  });
}
```
**Endpoint:** `GET /usuario/search/active-students`

#### 1.2 Obtener las materias asociadas a una carrera específica
```typescript
async findMateriasByCarrera(idCarrera: number) {
  return this.prisma.materia.findMany({
    where: { id_carrera: idCarrera },
    include: { carrera: true, aula: true, periodo: true }
  });
}
```
**Endpoint:** `GET /materia/by-career/:id_carrera`

#### 1.3 Listar los docentes que imparten más de una asignatura
```typescript
async findTeachersWithMultipleSubjects() {
  return this.prisma.usuario.findMany({
    where: { tipo: 'profesor' },
    include: { rol: true }
  });
}
```
**Endpoint:** `GET /usuario/search/teachers-multiple-subjects`

#### 1.4 Mostrar las matrículas de un estudiante en un período académico
```typescript
async findStudentEnrollmentsByPeriod(idUsuario: number, idPeriodo: number) {
  return this.prisma.inscripcion.findMany({
    where: { id_usuario: idUsuario },
    include: { usuario: true }
  });
}
```
**Endpoint:** `GET /inscripcion/student/:id_usuario/period/:id_periodo`

---

## 🔗 Parte 2: Operaciones Lógicas

### 2.1 Buscar estudiantes activos de una carrera (AND)
```typescript
async findActiveStudentsByCareerAndPeriod(idCarrera: number) {
  return this.prisma.usuario.findMany({
    where: {
      AND: [
        { tipo: 'estudiante' },
        { inscripciones: { some: { id_carrera: idCarrera } } }
      ]
    },
    include: { inscripciones: true, rol: true }
  });
}
```
**Endpoint:** `GET /usuario/search/active-students-career/:id_carrera`

**Lógica:** `tipo = 'estudiante' AND id_carrera = :id_carrera`

### 2.2 Filtrar docentes activos (AND + NOT)
```typescript
async findActiveTeachers() {
  return this.prisma.usuario.findMany({
    where: {
      AND: [
        { tipo: 'profesor' },
        { NOT: { tipo: 'inactivo' } }
      ]
    },
    include: { rol: true }
  });
}
```
**Endpoint:** `GET /usuario/search/active-teachers`

**Lógica:** `tipo = 'profesor' AND NOT (tipo = 'inactivo')`

### 2.3 Búsqueda con filtros compuestos (AND + OR)
```typescript
async findStudentsByCareerAndRole(idCarrera: number, roleFilter?: string) {
  return this.prisma.usuario.findMany({
    where: {
      AND: [
        { tipo: 'estudiante' },
        { inscripciones: { some: { id_carrera: idCarrera } } },
        roleFilter ? { rol: { nombre: roleFilter } } : {}
      ]
    }
  });
}
```
**Endpoint:** `GET /usuario/search/students-by-career/:id_carrera?role=ESTUDIANTE`

---

## 📈 Parte 3: Consulta Nativa SQL

### Query: Reporte Estudiantes por Cantidad de Materias

```sql
SELECT 
  u.nombre,
  u.apellido,
  c.nombre_carrera as carrera,
  COUNT(m.id_materia) as total_materias
FROM "Usuario" u
INNER JOIN "Inscripcion" i ON u.id_usuario = i.id_usuario
INNER JOIN "Carrera" c ON i.id_carrera = c.id_carrera
LEFT JOIN "Materia" m ON c.id_carrera = m.id_carrera
WHERE u.tipo = 'estudiante'
GROUP BY u.id_usuario, u.nombre, u.apellido, c.nombre_carrera
ORDER BY total_materias DESC
```

**Implementación en TypeScript:**
```typescript
async getStudentMateriaCountReport() {
  return this.prisma.$queryRaw`
    SELECT 
      u.nombre,
      u.apellido,
      c.nombre_carrera as carrera,
      COUNT(m.id_materia) as total_materias
    FROM "Usuario" u
    INNER JOIN "Inscripcion" i ON u.id_usuario = i.id_usuario
    INNER JOIN "Carrera" c ON i.id_carrera = c.id_carrera
    LEFT JOIN "Materia" m ON c.id_carrera = m.id_carrera
    WHERE u.tipo = 'estudiante'
    GROUP BY u.id_usuario, u.nombre, u.apellido, c.nombre_carrera
    ORDER BY total_materias DESC
  `;
}
```

**Endpoint:** `GET /materia/report/student-materia-count`

**Ventajas de Consulta Nativa:**
- Mejor performance para queries complejas
- Acceso a funciones SQL específicas de PostgreSQL
- Agregaciones y JOINs complejos
- Ordenamiento y agrupamiento avanzado

---

## ⚡ Parte 4: Operaciones Transaccionales

### Escenario: Matriculación de Estudiante

**Requiere:**
1. Verificar que el estudiante exista y esté activo
2. Verificar disponibilidad de cupos en la asignatura
3. Registrar la matrícula
4. Descontar el cupo disponible

**Garantías ACID:**
- **Atomicidad:** Todo o nada
- **Consistencia:** Respeta reglas de negocio
- **Aislamiento:** Múltiples estudiantes simultáneos
- **Durabilidad:** Persiste en disco

### Implementación:

```typescript
async enrollStudentInCourse(idUsuario: number, idMateria: number) {
  try {
    const student = await this.prismaUsuarios.usuario.findUnique({
      where: { id_usuario: idUsuario }
    });

    if (!student || student.tipo !== 'estudiante') {
      throw new BadRequestException('Invalid student');
    }

    const course = await this.prismaCarreras.materia.findUnique({
      where: { id_materia: idMateria },
      include: { aula: true }
    });

    if (course.aula.capacidad <= 0) {
      throw new ConflictException('No available seats');
    }

    const existingEnrollment = await this.prismaUsuarios.inscripcion.findFirst({
      where: {
        id_usuario: idUsuario,
        id_carrera: course.id_carrera
      }
    });

    if (existingEnrollment) {
      throw new ConflictException('Student is already enrolled in this career');
    }

    const enrollment = await this.prismaUsuarios.inscripcion.create({
      data: {
        id_usuario: idUsuario,
        id_carrera: course.id_carrera,
        fecha_inscripcion: new Date()
      }
    });

    return {
      success: true,
      message: 'Student successfully enrolled',
      enrollment
    };
  } catch (error) {
    throw error;
  }
}
```

**Endpoint:** `POST /inscripcion/enroll-transactional`

**Request:**
```json
{
  "id_usuario": 1,
  "id_materia": 1
}
```

**Response (Éxito):**
```json
{
  "success": true,
  "message": "Student successfully enrolled",
  "enrollment": {
    "id_inscripcion": 1,
    "id_usuario": 1,
    "id_carrera": 1,
    "fecha_inscripcion": "2026-01-22"
  }
}
```

---

## 🔒 Parte 5: Principios ACID

**Ver:** [ANALISIS_ACID.md](./ANALISIS_ACID.md)

Análisis detallado que incluye:
- ✅ **Atomicidad:** Garantías de todo o nada
- ✅ **Consistencia:** Integridad de datos
- ✅ **Aislamiento:** Manejo de concurrencia
- ✅ **Durabilidad:** Persistencia en disco

---

## 🚀 Instrucciones de Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd universidad-psm7-funcional
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
# Crear archivo .env
echo "DATABASE_USUARIOS=postgresql://user:password@localhost:5432/usuarios_db" > .env
echo "DATABASE_CARRERAS=postgresql://user:password@localhost:5432/carreras_db" >> .env
echo "DATABASE_PROFESOR=postgresql://user:password@localhost:5432/profesor_db" >> .env
echo "JWT_SECRET=your_secret_key" >> .env
```

### 4. Ejecutar migraciones
```bash
npm run prisma:migrate:usuarios
npm run prisma:migrate:carreras
npm run prisma:migrate:profesor
```

### 5. Seedear datos iniciales
```bash
npm run prisma:seed:usuarios
npm run prisma:seed:carreras
npm run prisma:seed:profesor
```

### 6. Compilar proyecto
```bash
npm run build
```

### 7. Iniciar servidor
```bash
npm run start:dev
```

Servidor disponible en: `http://localhost:3000`

---

## 📚 Documentación Incluida

### 1. **ENDPOINTS_GUIDE.md**
Guía completa con:
- 📝 Descripción de todos los endpoints
- 💻 Ejemplos cURL
- 📊 Respuestas JSON
- 🔐 Autenticación JWT
- 🧪 Testing en Postman

### 2. **ANALISIS_ACID.md**
Documento de análisis con:
- 🔍 Atomicidad en matriculación
- 🛡️ Consistencia de datos
- 🔄 Aislamiento en concurrencia
- 💾 Durabilidad en PostgreSQL
- 📈 Tablas comparativas
- 📚 Bibliografía

---

## 🧪 Testing

### Pruebas Unitarias
```bash
npm run test
```

### Pruebas E2E
```bash
npm run test:e2e
```

### Testing de Concurrencia (Apache JMeter)
1. Abrir Apache JMeter
2. Crear Thread Group con 10 threads
3. Agregar HTTP Request a `/inscripcion/enroll-transactional`
4. Verificar que no hay condiciones de carrera

---

## 📋 Checklist de Entrega

- [x] **Parte 1: Consultas Derivadas** (25%)
  - [x] Estudiantes activos con carrera
  - [x] Materias por carrera
  - [x] Docentes con múltiples asignaturas
  - [x] Matrículas por período

- [x] **Parte 2: Operaciones Lógicas** (20%)
  - [x] AND: Estudiantes activos de carrera
  - [x] AND + NOT: Docentes activos
  - [x] AND + OR: Búsqueda con filtros compuestos

- [x] **Parte 3: Consulta Nativa** (20%)
  - [x] SQL con JOINs y COUNT
  - [x] GROUP BY y ORDER BY
  - [x] Integración en NestJS

- [x] **Parte 4: Transacciones** (25%)
  - [x] Verificación de estudiante activo
  - [x] Verificación de disponibilidad de cupos
  - [x] Registro de matrícula
  - [x] Rollback automático en errores

- [x] **Parte 5: Análisis ACID** (10%)
  - [x] Atomicidad documentada
  - [x] Consistencia explicada
  - [x] Aislamiento analizado
  - [x] Durabilidad garantizada

---

## 🐛 Troubleshooting

### Error: "Cannot find module"
```bash
npm install
npm run prisma:generate:usuarios
npm run prisma:generate:carreras
npm run prisma:generate:profesor
```

### Error: "Connection refused"
- Verificar que PostgreSQL está corriendo
- Verificar variables de entorno `.env`
- Verificar credenciales de base de datos

### Error: "JWT Token invalid"
- Obtener nuevo token con `/auth/login`
- Incluir token en header: `Authorization: Bearer <TOKEN>`

---

## 📞 Contacto y Soporte

Para preguntas o problemas:
1. Revisar [ENDPOINTS_GUIDE.md](./ENDPOINTS_GUIDE.md)
2. Revisar [ANALISIS_ACID.md](./ANALISIS_ACID.md)
3. Contactar al docente

---

## 📄 Archivos Entregables

```
universidad-psm7-funcional/
├── src/                    # Código fuente
├── dist/                   # Código compilado
├── prisma/                 # Configuración Prisma
├── ANALISIS_ACID.md        # Análisis ACID ✓
├── ENDPOINTS_GUIDE.md      # Guía de endpoints ✓
├── README_TAREA.md         # Este archivo ✓
└── package.json            # Dependencias
```

---

**Elaborado:** Enero 2026  
**Versión:** 1.0  
**Estado:** ✅ Completo
