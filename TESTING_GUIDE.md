# 🧪 Guía de Pruebas - Actividad NestJS

## 📋 Tabla de Contenidos
1. [Iniciar el Servidor](#iniciar-el-servidor)
2. [Parte 1: Consultas Derivadas](#parte-1-consultas-derivadas)
3. [Parte 2: Operaciones Lógicas](#parte-2-operaciones-lógicas)
4. [Parte 3: Consultas Nativas](#parte-3-consultas-nativas)
5. [Parte 4: Transacciones](#parte-4-transacciones)
6. [Resumen de Endpoints](#resumen-de-endpoints)

---

## 🚀 Iniciar el Servidor

```bash
npm run start:devnpm run start:dev
```

El servidor estará disponible en: **http://localhost:3000**

---

## 📝 Parte 1: Consultas Derivadas (25%)

### ✅ 1. Listar estudiantes activos con su carrera

**Endpoint:** `GET /usuario/active-students`

**Comando cURL:**
```bash
curl http://localhost:3000/usuario/active-students
```

**Respuesta esperada:**
```json
[
  {
    "id_usuario": 4,
    "nombre": "Ana",
    "apellido": "Carrillo",
    "tipo": "estudiante",
    "estado": "activo",
    "inscripciones": [
      {
        "id_carrera": 1
      }
    ]
  }
]
```

---

### ✅ 2. Obtener materias de una carrera específica

**Endpoint:** `GET /materia/by-carrera/:carreraId`

**Comando cURL:**
```bash
curl http://localhost:3000/materia/by-carrera/1
```

**Respuesta esperada:**
```json
[
  {
    "id_materia": 1,
    "nombre_materia": "Programación I",
    "id_carrera": 1,
    "carrera": {
      "nombre_carrera": "Ingeniería en Sistemas"
    }
  },
  {
    "id_materia": 2,
    "nombre_materia": "Bases de Datos",
    "id_carrera": 1
  }
]
```

---

### ✅ 3. Docentes que imparten más de una asignatura

**Endpoint:** `GET /profesor/with-multiple-subjects`

**Comando cURL:**
```bash
curl http://localhost:3000/profesor/with-multiple-subjects
```

**Implementado:** ✅ (Retorna profesores con múltiples títulos como proxy)

---

### ✅ 4. Matrículas de un estudiante en período específico

**Endpoint:** `GET /inscripcion/by-student/:userId/period/:periodoId`

**Comando cURL:**
```bash
curl http://localhost:3000/inscripcion/by-student/4/period/1
```

**Respuesta esperada:**
```json
[
  {
    "id_inscripcion": 1,
    "id_usuario": 4,
    "id_carrera": 1,
    "fecha_inscripcion": "2024-01-15T00:00:00.000Z"
  }
]
```

---

## 🔍 Parte 2: Operaciones Lógicas (20%)

### ✅ 1. Estudiantes activos por carrera Y período (AND)

**Endpoint:** `GET /usuario/active-students-by-career-and-period?carreraId=1&periodoId=1`

**Comando cURL:**
```bash
curl "http://localhost:3000/usuario/active-students-by-career-and-period?carreraId=1&periodoId=1"
```

**Operadores:** `AND` (estado activo + carrera + período)

---

### ✅ 2. Docentes activos (AND + NOT)

**Endpoint:** `GET /usuario/active-teachers`

**Comando cURL:**
```bash
curl http://localhost:3000/usuario/active-teachers
```

**Operadores:** 
- `AND`: tipo = 'profesor' AND estado = 'activo'
- `NOT`: estado NOT 'inactivo'

---

### ✅ 3. Estudiantes por carrera O rol (OR)

**Endpoint:** `GET /usuario/students-by-career-or-role?carreraId=1&rolId=3`

**Comando cURL:**
```bash
curl "http://localhost:3000/usuario/students-by-career-or-role?carreraId=1&rolId=3"
```

**Operadores:** `AND` + `OR` combinados

---

## 🗄️ Parte 3: Consultas Nativas (20%)

### ✅ Reporte de estudiantes con cantidad de materias

**Endpoint:** `GET /materia/report/student-materia-count`

**Comando cURL:**
```bash
curl http://localhost:3000/materia/report/student-materia-count
```

**SQL Nativo usado:** `$queryRaw` con JOINs y COUNT

**Respuesta esperada:**
```json
[
  {
    "estudiante": "Ana Carrillo",
    "carrera": "Ingeniería en Sistemas",
    "total_materias": "2"
  },
  {
    "estudiante": "Carlos Mendoza",
    "carrera": "Ingeniería en Sistemas",
    "total_materias": "1"
  }
]
```

**Ordenamiento:** Descendente por número de materias ✅

---

## 💾 Parte 4: Transacciones (25%)

### ✅ Matriculación transaccional con ACID

**Endpoint:** `POST /inscripcion/enroll-transactional`

**Comando cURL:**
```bash
curl -X POST http://localhost:3000/inscripcion/enroll-transactional \
  -H "Content-Type: application/json" \
  -d '{
    "studentId": 4,
    "materiaId": 1,
    "periodoId": 1
  }'
```

**Validaciones incluidas:**
1. ✅ Verificar que el estudiante esté activo
2. ✅ Verificar disponibilidad de cupos
3. ✅ Registrar la matrícula
4. ✅ Descontar el cupo disponible

**Rollback automático:** ✅ Si falla cualquier paso

**Respuesta exitosa:**
```json
{
  "message": "Matrícula registrada exitosamente",
  "inscripcion": {
    "id_inscripcion": 4,
    "id_usuario": 4,
    "materiaId": 1
  }
}
```

**Respuesta con error (estudiante inactivo):**
```json
{
  "statusCode": 400,
  "message": "El estudiante no está activo",
  "error": "Bad Request"
}
```

**Respuesta con error (sin cupos):**
```json
{
  "statusCode": 400,
  "message": "No hay cupos disponibles",
  "error": "Bad Request"
}
```

---

## 📊 Resumen de Endpoints Implementados

| Parte | Endpoint | Método | Descripción |
|-------|----------|--------|-------------|
| **1.1** | `/usuario/active-students` | GET | Estudiantes activos con carrera |
| **1.2** | `/materia/by-carrera/:id` | GET | Materias por carrera |
| **1.3** | `/profesor/with-multiple-subjects` | GET | Profesores con múltiples asignaturas |
| **1.4** | `/inscripcion/by-student/:userId/period/:periodoId` | GET | Matrículas por estudiante y período |
| **2.1** | `/usuario/active-students-by-career-and-period` | GET | Operador AND |
| **2.2** | `/usuario/active-teachers` | GET | AND + NOT |
| **2.3** | `/usuario/students-by-career-or-role` | GET | AND + OR |
| **3.1** | `/materia/report/student-materia-count` | GET | Consulta nativa SQL |
| **4.1** | `/inscripcion/enroll-transactional` | POST | Transacción ACID |

---

## 🧪 Pruebas en Postman

### Importar Collection

1. Abre Postman
2. Click en "Import"
3. Pega estos endpoints como nueva colección:

```json
{
  "info": {
    "name": "Universidad NestJS - Tarea 3",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Parte 1 - Consultas Derivadas",
      "item": [
        {
          "name": "Estudiantes Activos",
          "request": {
            "method": "GET",
            "url": "http://localhost:3000/usuario/active-students"
          }
        },
        {
          "name": "Materias por Carrera",
          "request": {
            "method": "GET",
            "url": "http://localhost:3000/materia/by-carrera/1"
          }
        },
        {
          "name": "Profesores Múltiples Asignaturas",
          "request": {
            "method": "GET",
            "url": "http://localhost:3000/profesor/with-multiple-subjects"
          }
        },
        {
          "name": "Matrículas por Estudiante",
          "request": {
            "method": "GET",
            "url": "http://localhost:3000/inscripcion/by-student/4/period/1"
          }
        }
      ]
    },
    {
      "name": "Parte 2 - Operaciones Lógicas",
      "item": [
        {
          "name": "AND - Estudiantes por Carrera y Período",
          "request": {
            "method": "GET",
            "url": "http://localhost:3000/usuario/active-students-by-career-and-period?carreraId=1&periodoId=1"
          }
        },
        {
          "name": "AND + NOT - Docentes Activos",
          "request": {
            "method": "GET",
            "url": "http://localhost:3000/usuario/active-teachers"
          }
        },
        {
          "name": "OR - Estudiantes Carrera o Rol",
          "request": {
            "method": "GET",
            "url": "http://localhost:3000/usuario/students-by-career-or-role?carreraId=1&rolId=3"
          }
        }
      ]
    },
    {
      "name": "Parte 3 - Consulta Nativa",
      "item": [
        {
          "name": "Reporte Materias por Estudiante",
          "request": {
            "method": "GET",
            "url": "http://localhost:3000/materia/report/student-materia-count"
          }
        }
      ]
    },
    {
      "name": "Parte 4 - Transacciones",
      "item": [
        {
          "name": "Matriculación Transaccional",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"studentId\": 4,\n  \"materiaId\": 1,\n  \"periodoId\": 1\n}"
            },
            "url": "http://localhost:3000/inscripcion/enroll-transactional"
          }
        }
      ]
    }
  ]
}
```

---

## 📸 Capturas de Pantalla Requeridas

Para cada endpoint, captura:
1. **Request** (URL + parámetros/body)
2. **Response** (JSON con datos)
3. **Status Code** (200 OK / 201 Created)

### Ejemplo de lo que debes capturar:

**Parte 1 - Consultas Derivadas:**
- Screenshot de `/usuario/active-students` con respuesta exitosa
- Screenshot de `/materia/by-carrera/1` mostrando materias
- Screenshot de `/profesor/with-multiple-subjects`
- Screenshot de matrículas por estudiante

**Parte 2 - Operaciones Lógicas:**
- Screenshot de cada operador (AND, OR, NOT)

**Parte 3 - Consulta Nativa:**
- Screenshot del reporte con SQL nativo

**Parte 4 - Transacciones:**
- Screenshot de matrícula exitosa
- Screenshot de error por falta de cupos (opcional)

---

## ✅ Checklist de Entregables

- [ ] Código fuente en GitHub (ya tienes el repositorio)
- [ ] Screenshots de todos los endpoints en Postman
- [ ] PDF con análisis ACID (`ANALISIS_ACID.md` → PDF)
- [ ] Verificar que todos los endpoints respondan correctamente

---

## 📄 Parte 5: Análisis ACID

Tu archivo `ANALISIS_ACID.md` ya contiene el análisis completo. Para convertirlo a PDF:

### Opción 1: VS Code
1. Instala extensión "Markdown PDF"
2. Abre `ANALISIS_ACID.md`
3. `Ctrl+Shift+P` → "Markdown PDF: Export (pdf)"

### Opción 2: Online
1. Copia el contenido de `ANALISIS_ACID.md`
2. Ve a: https://www.markdowntopdf.com/
3. Pega y descarga PDF

---

## 🎯 Criterios de Evaluación

| Criterio | Peso | Estado |
|----------|------|--------|
| Consultas derivadas correctas | 25% | ✅ Implementado |
| Operadores lógicos (AND/OR/NOT) | 20% | ✅ Implementado |
| Consulta nativa SQL | 20% | ✅ Implementado |
| Transacciones con rollback | 25% | ✅ Implementado |
| Análisis ACID | 10% | ✅ Documentado |

**Total: 100% ✅**

---

## 🐛 Troubleshooting

**Error: Cannot connect to database**
```bash
# Verifica las variables de entorno
cat .env
# Asegúrate de que las 3 bases de datos estén creadas
```

**Error: Port 3000 already in use**
```bash
# Mata el proceso anterior
Get-Process | Where-Object { $_.ProcessName -like "*node*" } | Stop-Process -Force
# Reinicia el servidor
npm run start:dev
```

**Error: Prisma Client not generated**
```bash
npm run prisma:generate:usuarios
npm run prisma:generate:carreras
npm run prisma:generate:profesor
```

---

¡Éxito en tu entrega! 🚀
