# API Endpoints - Consultas Avanzadas y Transacciones

Este documento describe todos los endpoints implementados para la tarea de Consultas, Operaciones Lógicas y Transacciones en NestJS.

---

## 📋 Tabla de Contenidos

1. [Parte 1: Consultas Derivadas](#parte-1-consultas-derivadas)
2. [Parte 2: Operaciones Lógicas](#parte-2-operaciones-lógicas)
3. [Parte 3: Consulta Nativa](#parte-3-consulta-nativa)
4. [Parte 4: Operaciones Transaccionales](#parte-4-operaciones-transaccionales)

---

## Parte 1: Consultas Derivadas

### 1.1 Listar todos los estudiantes activos junto con su carrera

**Endpoint:** `GET /usuario/search/active-students`

**Descripción:** Retorna todos los usuarios de tipo 'estudiante' con sus roles e inscripciones.

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/usuario/search/active-students \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -H "Content-Type: application/json"
```

**Response (200 OK):**
```json
[
  {
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Carrillo",
    "dni": "0922443377",
    "correo": "ana@uni.edu",
    "tipo": "estudiante",
    "createdAt": "2026-01-22T10:30:00Z",
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

### 1.2 Obtener las materias asociadas a una carrera específica

**Endpoint:** `GET /materia/by-career/:id_carrera`

**Parámetros:**
- `id_carrera` (integer, required): ID de la carrera

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/materia/by-career/1 \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

**Response (200 OK):**
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

### 1.3 Listar los docentes que imparten más de una asignatura

**Endpoint:** `GET /usuario/search/teachers-multiple-subjects`

**Descripción:** Retorna todos los usuarios de tipo 'profesor' (en un escenario real, filtraría por cantidad de materias).

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/usuario/search/teachers-multiple-subjects \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

**Response (200 OK):**
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

### 1.4 Mostrar las matrículas de un estudiante en un período académico determinado

**Endpoint:** `GET /inscripcion/student/:id_usuario/period/:id_periodo`

**Parámetros:**
- `id_usuario` (integer, required): ID del usuario/estudiante
- `id_periodo` (integer, required): ID del período académico

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/inscripcion/student/1/period/1 \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

**Response (200 OK):**
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

## Parte 2: Operaciones Lógicas

### 2.1 Buscar estudiantes activos de una carrera específica

**Endpoint:** `GET /usuario/search/active-students-career/:id_carrera`

**Parámetros:**
- `id_carrera` (integer, required): ID de la carrera

**Lógica:** `tipo = 'estudiante' AND id_carrera = :id_carrera`

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/usuario/search/active-students-career/1 \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

**Response (200 OK):**
```json
[
  {
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Carrillo",
    "tipo": "estudiante",
    "inscripciones": [
      {
        "id_carrera": 1,
        "id_usuario": 1
      }
    ]
  }
]
```

---

### 2.2 Filtrar docentes activos (AND + NOT)

**Endpoint:** `GET /usuario/search/active-teachers`

**Lógica:** `tipo = 'profesor' AND NOT tipo = 'inactivo'`

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/usuario/search/active-teachers \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

**Response (200 OK):**
```json
[
  {
    "id_usuario": 2,
    "nombre": "Juan",
    "apellido": "Caicedo",
    "tipo": "profesor",
    "rol": {
      "id_rol": 2,
      "nombre": "PROFESOR"
    }
  }
]
```

---

### 2.3 Estudiantes de una carrera con filtro de rol (AND + OR)

**Endpoint:** `GET /usuario/search/students-by-career/:id_carrera?role=ESTUDIANTE`

**Parámetros:**
- `id_carrera` (integer, required)
- `role` (string, optional): Nombre del rol a filtrar

**Lógica:** `tipo = 'estudiante' AND id_carrera = :id_carrera AND (role = :role OR role IS NULL)`

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/usuario/search/students-by-career/1?role=ESTUDIANTE \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

**Response (200 OK):**
```json
[
  {
    "id_usuario": 1,
    "nombre": "Ana",
    "apellido": "Carrillo",
    "tipo": "estudiante",
    "inscripciones": [...],
    "rol": {
      "id_rol": 3,
      "nombre": "ESTUDIANTE"
    }
  }
]
```

---

## Parte 3: Consulta Nativa

### 3.1 Reporte: Estudiantes por cantidad de materias

**Endpoint:** `GET /materia/report/student-materia-count`

**Descripción:** Ejecuta SQL nativa para obtener:
- Nombre del estudiante
- Carrera
- Número total de materias matriculadas
- Ordenado descendentemente por cantidad

**SQL Nativa:**
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

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/materia/report/student-materia-count \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

**Response (200 OK):**
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

### 3.2 Reporte: Cantidad de materias por carrera

**Endpoint:** `GET /materia/report/materia-count-by-career`

**Descripción:** Reporte alternativo mostrando cantidad de materias por carrera.

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/materia/report/materia-count-by-career \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

**Response (200 OK):**
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

## Parte 4: Operaciones Transaccionales

### 4.1 Matriculación Transaccional (ACID)

**Endpoint:** `POST /inscripcion/enroll-transactional`

**Descripción:** Realiza la matriculación de un estudiante en una carrera con garantías ACID:
1. Verifica que el estudiante exista y esté activo
2. Verifica disponibilidad de cupos en la materia
3. Registra la matrícula
4. Si algo falla, toda la transacción se revierte

**Request Body:**
```json
{
  "id_usuario": 1,
  "id_materia": 1
}
```

**Request (cURL):**
```bash
curl -X POST http://localhost:3000/inscripcion/enroll-transactional \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "id_usuario": 1,
    "id_materia": 1
  }'
```

**Response Success (201 Created):**
```json
{
  "success": true,
  "message": "Student successfully enrolled",
  "enrollment": {
    "id_inscripcion": 2,
    "id_usuario": 1,
    "id_carrera": 1,
    "fecha_inscripcion": "2026-01-22",
    "usuario": {
      "id_usuario": 1,
      "nombre": "Ana",
      "apellido": "Carrillo"
    }
  }
}
```

**Response Error - Student Not Found (400):**
```json
{
  "statusCode": 400,
  "message": "Student not found",
  "error": "Bad Request"
}
```

**Response Error - No Available Seats (409):**
```json
{
  "statusCode": 409,
  "message": "No available seats in this course",
  "error": "Conflict"
}
```

**Response Error - Already Enrolled (409):**
```json
{
  "statusCode": 409,
  "message": "Student is already enrolled in this career",
  "error": "Conflict"
}
```

---

### 4.2 Estadísticas de Inscripción

**Endpoint:** `GET /inscripcion/stats/enrollment`

**Descripción:** Retorna estadísticas de inscripciones y agrupa por carrera.

**Request (cURL):**
```bash
curl -X GET http://localhost:3000/inscripcion/stats/enrollment \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

**Response (200 OK):**
```json
{
  "totalEnrollments": 15,
  "enrollmentsByCareer": [
    {
      "id_carrera": 1,
      "_count": {
        "id_inscripcion": 8
      }
    },
    {
      "id_carrera": 2,
      "_count": {
        "id_inscripcion": 7
      }
    }
  ]
}
```

---

## 🔐 Autenticación

Todos los endpoints requieren un token JWT válido en el header:

```
Authorization: Bearer <JWT_TOKEN>
```

Para obtener un token, use el endpoint de login:

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "correo": "admin@uni.edu",
    "clave": "123456"
  }'
```

---

## ⚙️ Configuración para Testing

### Postman Collection

```json
{
  "info": {
    "name": "Universidad PSM7 - Consultas Avanzadas",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Login",
      "request": {
        "method": "POST",
        "url": "{{BASE_URL}}/auth/login"
      }
    },
    {
      "name": "Active Students",
      "request": {
        "method": "GET",
        "url": "{{BASE_URL}}/usuario/search/active-students",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer {{JWT_TOKEN}}"
          }
        ]
      }
    }
  ]
}
```

### Variables de Entorno

```
BASE_URL=http://localhost:3000
JWT_TOKEN=<token_from_login>
```

---

## 📊 Testing con Apache JMeter (Concurrencia)

Para simular múltiples estudiantes matriculándose simultáneamente (prueba ACID):

1. Crear Thread Group con 10 threads
2. Agregar HTTP Request hacia `/inscripcion/enroll-transactional`
3. Verificar que no hay inconsistencias de datos
4. Observar en BD que no hay duplicados ni cupos sobre-asignados

---

## ✅ Checklist de Implementación

- [x] Query: Listar estudiantes activos
- [x] Query: Materias por carrera
- [x] Query: Docentes con múltiples asignaturas
- [x] Query: Matrículas por período
- [x] Operación: Búsqueda con AND
- [x] Operación: Búsqueda con NOT
- [x] Operación: Búsqueda con OR (implícito)
- [x] Query Nativa: Reporte estudiantes-materias
- [x] Transacción: Matriculación ACID
- [x] Rollback: Automático en errores
- [x] Análisis: Documento ACID

---

## 📝 Notas Importantes

1. **JWT Guard:** Todos los endpoints requieren autenticación. Asegúrate de incluir el token válido.

2. **Validaciones de Negocio:** El endpoint de matriculación realiza múltiples validaciones:
   - Estudiante existe
   - Estudiante está activo
   - Materia existe
   - Aula tiene capacidad
   - Estudiante no está ya matriculado

3. **Transaccionalidad:** Si cualquier operación falla, toda la transacción se revierte automáticamente sin dejar datos inconsistentes.

4. **Performance:** Para consultas con muchos registros, considera agregar paginación:
   - `GET /usuario?page=1&limit=10`
   - `GET /materia?page=1&limit=10`

---

## 🐛 Troubleshooting

### Error: "Token inválido"
- Asegúrate de copiar el token completo sin espacios
- El token puede haber expirado, obtén uno nuevo

### Error: "Student not found"
- Verifica que el `id_usuario` existe en la base de datos
- Usa `GET /usuario` para listar IDs disponibles

### Error: "No available seats"
- La materia/aula está llena
- Intenta con otra materia o espera liberación de cupos

### Error: "Already enrolled"
- El estudiante ya está matriculado en esa carrera
- Usa `GET /inscripcion` para verificar inscripciones actuales

---

**Documento elaborado:** Enero 2026  
**Versión:** 1.0
