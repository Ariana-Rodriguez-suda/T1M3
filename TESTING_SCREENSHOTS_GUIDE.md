# 📸 Guía de Capturas de Pantalla - Endpoints Implementados

Este documento guía para capturar screenshots de todos los endpoints implementados en Postman o Swagger.

**URL Base:** `http://localhost:3000`

---

## ✅ PARTE 1: CONSULTAS DERIVADAS

### 1.1 GET /usuario/search/active-students
**Descripción:** Listar todos los estudiantes activos junto con su carrera

```
GET http://localhost:3000/usuario/search/active-students
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Expected Response (200):**
```json
[
  {
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Carrillo",
    "dni": "0922443377",
    "correo": "ana@uni.edu",
    "tipo": "estudiante",
    "rolId": 3,
    "rol": {
      "id_rol": 3,
      "nombre": "ESTUDIANTE"
    },
    "inscripciones": [
      {
        "id_inscripcion": 1,
        "id_usuario": 1,
        "id_carrera": 1,
        "fecha_inscripcion": "2026-01-22"
      }
    ]
  }
]
```

---

### 1.2 GET /materia/by-career/:id_carrera
**Descripción:** Obtener las materias asociadas a una carrera específica

```
GET http://localhost:3000/materia/by-career/1
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Expected Response (200):**
```json
[
  {
    "id_materia": 1,
    "nombre_materia": "Cálculo I",
    "id_carrera": 1,
    "id_aula": 1,
    "periodoId": 1,
    "carrera": {
      "id_carrera": 1,
      "nombre_carrera": "Ingeniería en Sistemas",
      "duracion_anos": 5
    },
    "aula": {
      "id_aula": 1,
      "nombre_aula": "Aula A1",
      "capacidad": 30,
      "ubicacion": "Edificio A"
    },
    "periodo": {
      "id_periodo": 1,
      "nombre": "Semestre 1 - 2026",
      "fecha_inicio": "2026-02-01",
      "fecha_fin": "2026-06-30"
    }
  }
]
```

---

### 1.3 GET /usuario/search/teachers-multiple-subjects
**Descripción:** Listar los docentes que imparten más de una asignatura

```
GET http://localhost:3000/usuario/search/teachers-multiple-subjects
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Expected Response (200):**
```json
[
  {
    "id_usuario": 2,
    "nombre": "Juan",
    "apellido": "Caicedo",
    "dni": "0966443377",
    "correo": "juan@uni.edu",
    "tipo": "profesor",
    "rolId": 2,
    "rol": {
      "id_rol": 2,
      "nombre": "PROFESOR"
    }
  }
]
```

---

### 1.4 GET /inscripcion/student/:id_usuario/period/:id_periodo
**Descripción:** Mostrar las matrículas de un estudiante en un período académico

```
GET http://localhost:3000/inscripcion/student/1/period/1
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Expected Response (200):**
```json
[
  {
    "id_inscripcion": 1,
    "id_usuario": 1,
    "id_carrera": 1,
    "fecha_inscripcion": "2026-01-22",
    "usuario": {
      "id_usuario": 1,
      "nombre": "Ana",
      "apellido": "Carrillo",
      "tipo": "estudiante"
    }
  }
]
```

---

## ✅ PARTE 2: OPERACIONES LÓGICAS

### 2.1 GET /usuario/search/active-students-career/:id_carrera
**Descripción:** Buscar estudiantes activos de una carrera específica (AND)

```
GET http://localhost:3000/usuario/search/active-students-career/1
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Lógica SQL:** `tipo = 'estudiante' AND id_carrera = :id_carrera`

**Expected Response (200):**
```json
[
  {
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Carrillo",
    "tipo": "estudiante",
    "inscripciones": [
      {
        "id_inscripcion": 1,
        "id_usuario": 1,
        "id_carrera": 1,
        "fecha_inscripcion": "2026-01-22"
      }
    ],
    "rol": {
      "id_rol": 3,
      "nombre": "ESTUDIANTE"
    }
  }
]
```

---

### 2.2 GET /usuario/search/active-teachers
**Descripción:** Filtrar docentes activos (AND + NOT)

```
GET http://localhost:3000/usuario/search/active-teachers
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Lógica SQL:** `tipo = 'profesor' AND NOT tipo = 'inactivo'`

**Expected Response (200):**
```json
[
  {
    "id_usuario": 2,
    "nombre": "Juan",
    "apellido": "Caicedo",
    "dni": "0966443377",
    "correo": "juan@uni.edu",
    "tipo": "profesor",
    "rolId": 2,
    "rol": {
      "id_rol": 2,
      "nombre": "PROFESOR"
    }
  }
]
```

---

### 2.3 GET /usuario/search/students-by-career/:id_carrera?role=ESTUDIANTE
**Descripción:** Estudiantes de una carrera con filtro de rol (AND + OR)

```
GET http://localhost:3000/usuario/search/students-by-career/1?role=ESTUDIANTE
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Lógica SQL:** `tipo = 'estudiante' AND id_carrera = :id_carrera AND (role = :role OR role IS NULL)`

**Expected Response (200):**
```json
[
  {
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Carrillo",
    "tipo": "estudiante",
    "inscripciones": [
      {
        "id_inscripcion": 1,
        "id_usuario": 1,
        "id_carrera": 1,
        "fecha_inscripcion": "2026-01-22"
      }
    ],
    "rol": {
      "id_rol": 3,
      "nombre": "ESTUDIANTE"
    }
  }
]
```

---

## ✅ PARTE 3: CONSULTA NATIVA SQL

### 3.1 GET /materia/report/student-materia-count
**Descripción:** Reporte con SQL nativa - Estudiantes por cantidad de materias

```
GET http://localhost:3000/materia/report/student-materia-count
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**SQL Nativa Ejecutada:**
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

**Expected Response (200):**
```json
[
  {
    "nombre": "Ana",
    "apellido": "Carrillo",
    "carrera": "Ingeniería en Sistemas",
    "total_materias": 5
  },
  {
    "nombre": "María",
    "apellido": "González",
    "carrera": "Medicina",
    "total_materias": 3
  }
]
```

---

### 3.2 GET /materia/report/materia-count-by-career
**Descripción:** Reporte alternativo - Cantidad de materias por carrera

```
GET http://localhost:3000/materia/report/materia-count-by-career
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Expected Response (200):**
```json
[
  {
    "id_carrera": 1,
    "nombre_carrera": "Ingeniería en Sistemas",
    "total_materias": 8,
    "nombre_aula": "Aula A1",
    "capacidad": 30
  },
  {
    "id_carrera": 2,
    "nombre_carrera": "Medicina",
    "total_materias": 12,
    "nombre_aula": "Laboratorio",
    "capacidad": 25
  }
]
```

---

## ✅ PARTE 4: OPERACIONES TRANSACCIONALES

### 4.1 POST /inscripcion/enroll-transactional
**Descripción:** Matriculación transaccional con garantías ACID

```
POST http://localhost:3000/inscripcion/enroll-transactional
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Body:
{
  "id_usuario": 1,
  "id_materia": 1
}
```

**Expected Response Success (201):**
```json
{
  "success": true,
  "message": "Student successfully enrolled",
  "enrollment": {
    "id_inscripcion": 2,
    "id_usuario": 1,
    "id_carrera": 1,
    "fecha_inscripcion": "2026-01-26T15:30:00Z",
    "usuario": {
      "id_usuario": 1,
      "nombre": "Ana",
      "apellido": "Carrillo",
      "tipo": "estudiante"
    }
  }
}
```

**Expected Response Error (400) - Student not found:**
```json
{
  "message": "Student not found",
  "error": "Bad Request",
  "statusCode": 400
}
```

**Expected Response Error (409) - No seats available:**
```json
{
  "message": "No available seats in this course",
  "error": "Conflict",
  "statusCode": 409
}
```

---

## 📊 Resumen de Endpoints Implementados

| # | Método | Endpoint | Parte | Status |
|----|--------|----------|-------|--------|
| 1 | GET | `/usuario/search/active-students` | 1 | ✅ |
| 2 | GET | `/materia/by-career/:id_carrera` | 1 | ✅ |
| 3 | GET | `/usuario/search/teachers-multiple-subjects` | 1 | ✅ |
| 4 | GET | `/inscripcion/student/:id_usuario/period/:id_periodo` | 1 | ✅ |
| 5 | GET | `/usuario/search/active-students-career/:id_carrera` | 2 | ✅ |
| 6 | GET | `/usuario/search/active-teachers` | 2 | ✅ |
| 7 | GET | `/usuario/search/students-by-career/:id_carrera?role=...` | 2 | ✅ |
| 8 | GET | `/materia/report/student-materia-count` | 3 | ✅ |
| 9 | GET | `/materia/report/materia-count-by-career` | 3 | ✅ |
| 10 | POST | `/inscripcion/enroll-transactional` | 4 | ✅ |

---

## 🔐 Cómo Obtener JWT Token

### Opción 1: Usar Swagger UI
1. Ir a `http://localhost:3000/api` (si está habilitado)
2. Buscar endpoint de login/auth
3. Ejecutar y copiar el token

### Opción 2: Usar Postman
```
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "email": "usuario@ejemplo.com",
  "password": "contraseña"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 📸 Instrucciones para Capturar Screenshots

### En Postman:
1. Abre cada request de la lista anterior
2. Click en **Send**
3. Verificar que response sea 200 OK (o el código esperado)
4. Tomar screenshot con `Win + Shift + S` o captura de pantalla
5. Guardar imagen

### En Swagger:
1. Ir a `http://localhost:3000/api`
2. Click en cada endpoint
3. Click en **Try it out**
4. Llenar parámetros
5. Click en **Execute**
6. Tomar screenshot del response

### Importante para el PDF:
- Incluir screenshots de al menos **1 endpoint por parte** (mínimo 4)
- Preferiblemente **todos** los endpoints (10 total)
- Mostrar: URL, Headers (con Authorization), Response Status y Body
- Opcional: Incluir ejemplos de error (4xx, 5xx) para mostrar manejo de excepciones

---

## 📝 Estructura del PDF de Screenshots

Sugerencia de estructura para el PDF:
```
1. Portada
   - Título: "Capturas de Pantalla - Endpoints Implementados"
   - Información del proyecto
   - Fecha

2. Índice

3. Parte 1: Consultas Derivadas (4 screenshots)
   - Screenshot 1.1: Estudiantes activos
   - Screenshot 1.2: Materias por carrera
   - Screenshot 1.3: Docentes con múltiples asignaturas
   - Screenshot 1.4: Matrículas de estudiante

4. Parte 2: Operaciones Lógicas (3 screenshots)
   - Screenshot 2.1: Estudiantes activos por carrera (AND)
   - Screenshot 2.2: Docentes activos (AND + NOT)
   - Screenshot 2.3: Estudiantes por carrera y rol (AND + OR)

5. Parte 3: Consulta Nativa (2 screenshots)
   - Screenshot 3.1: Reporte estudiantes-materias
   - Screenshot 3.2: Reporte materias-carrera

6. Parte 4: Transacciones ACID (2 screenshots)
   - Screenshot 4.1: Matriculación exitosa
   - Screenshot 4.2: Matriculación fallida (error 400)

7. Anexos (opcional)
   - Código fuente de servicios
   - URLs de endpoints
```

---

## ✅ Checklist de Screenshots

- [ ] Todas las URLs probadas correctamente
- [ ] Se obtienen responses 200 OK
- [ ] Se capturaron al menos 10 screenshots (1 por endpoint)
- [ ] Cada screenshot incluye: URL, método, headers, response
- [ ] Se incluyeron ejemplos de errores (optional pero recomendado)
- [ ] Imágenes tienen buena resolución
- [ ] PDF está bien formateado
- [ ] PDF incluye tabla de contenidos

---

**Documento creado:** 26 de Enero, 2026  
**Para:** Tarea de Consultas, Operaciones Lógicas y Transacciones - Clase 3 NestJS
