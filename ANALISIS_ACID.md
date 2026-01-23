# Análisis de Principios ACID en Sistema de Gestión Universitaria

**Curso:** Programación Backend - NestJS con Prisma 7  
**Tema:** Transacciones y Principios ACID  
**Fecha:** Enero 2026

---

## 1. Introducción

Los principios ACID son fundamentales en sistemas de bases de datos para garantizar la confiabilidad e integridad de los datos. En el contexto de nuestro sistema de gestión universitaria, implementado con NestJS y Prisma 7, estos principios son críticos para operaciones como matriculación de estudiantes, gestión de calificaciones y asignación de recursos.

---

## 2. Atomicidad (Atomicity)

### Definición
La atomicidad garantiza que una transacción se ejecute completamente o no se ejecute en absoluto. No existen estados intermedios.

### Aplicación en Matriculación
En nuestro sistema, cuando un estudiante se matricula en una carrera, se ejecutan múltiples operaciones:

```typescript
async enrollStudentInCourse(idUsuario: number, idMateria: number) {
  // 1. Verificar que el estudiante exista y esté activo
  // 2. Verificar disponibilidad de cupos
  // 3. Registrar la matrícula
  // 4. Descontar el cupo disponible
}
```

**Garantía Atómica:**
- Si la verificación falla → Se revierte toda la transacción (sin matrícula)
- Si no hay cupos disponibles → Se revierte toda la transacción
- Si la creación de matrícula falla → Se revierte el descuento de cupos

**Beneficio:** No tenemos estados inconsistentes donde un estudiante está matriculado pero el cupo no fue descontado, o viceversa.

### Implementación en Prisma 7
```typescript
try {
  // Todas las operaciones en una transacción
  const enrollment = await this.prismaUsuarios.inscripcion.create({...});
  // Si aquí falla, todo se revierte automáticamente
  return { success: true, enrollment };
} catch (error) {
  // Rollback automático - no hace falta hacer nada
  throw error;
}
```

---

## 3. Consistencia (Consistency)

### Definición
La consistencia asegura que la base de datos pase de un estado válido a otro estado válido. Las reglas de negocio y restricciones siempre se cumplen.

### Aplicación en el Sistema Universitario

**Restricciones de Consistencia:**

1. **Estudiantes Activos:** Un estudiante solo puede matricularse si está activo
   ```typescript
   if (student.tipo !== 'estudiante') {
     throw new BadRequestException('User is not a valid student');
   }
   ```

2. **Capacidad de Aulas:** No se puede asignar más estudiantes que la capacidad del aula
   ```typescript
   if (course.aula.capacidad <= 0) {
     throw new ConflictException('No available seats in this course');
   }
   ```

3. **Claves Foráneas:** Todas las relaciones entre tablas se mantienen válidas
   - Un usuario siempre debe tener un rol válido
   - Una materia siempre debe pertenecer a una carrera
   - Un periodo siempre debe tener fechas válidas (inicio < fin)

**Garantía de Consistencia:**
- Prisma valida automáticamente las restricciones de base de datos
- Nuestro código de negocio valida reglas adicionales
- Si cualquier validación falla, la transacción se revierte

---

## 4. Aislamiento (Isolation)

### Definición
El aislamiento previene que transacciones concurrentes interfieran entre sí. Cada transacción se ejecuta de manera independiente.

### Desafío: Múltiples Estudiantes Matriculándose Simultáneamente

**Escenario:**
- Curso: "Cálculo I" con 2 cupos disponibles
- Estudiante A y Estudiante B intentan matricularse al mismo tiempo
- Sin aislamiento: Ambos podrían ver 2 cupos disponibles y ambos se matriculan → Total 2 cupos, pero deberían ser solo 2

### Niveles de Aislamiento en PostgreSQL

Nuestro sistema usa PostgreSQL con **nivel de aislamiento READ COMMITTED** por defecto:

```typescript
// Cada conexión mantiene su propia vista de datos
prismaUsuarios.inscripcion.create({...})
```

**Comportamiento:**

1. **Transacción A:** Lee cupos disponibles = 2
2. **Transacción B:** Lee cupos disponibles = 2
3. **Transacción A:** Crea inscripción, descuenta cupo a 1
4. **Transacción B:** Crea inscripción, descuenta cupo a 0

**Resultado Correcto:** Ambas transacciones se ejecutan sin interferencia. PostgreSQL garantiza que cada operación ve los datos más recientes.

### Mecanismo de Lock (Bloqueo)

Para operaciones críticas, podemos implementar **locks de fila**:

```typescript
// Bloquear registro para actualización exclusiva
SELECT * FROM "Materia" WHERE id_materia = 1 FOR UPDATE;
```

Esto asegura que solo una transacción pueda modificar el registro simultáneamente.

---

## 5. Durabilidad (Durability)

### Definición
La durabilidad garantiza que una transacción confirmada permanece en la base de datos incluso ante fallos del sistema (apagones, crashes).

### Importancia en Sistema Universitario

**Escenarios Críticos:**

1. **Registro de Matrícula:**
   - Un estudiante se matricula satisfactoriamente
   - Se registra en la transacción
   - Ocurre un apagón eléctrico
   - **Garantía de Durabilidad:** La matrícula persiste en la BD

2. **Calificaciones:**
   - Profesor ingresa calificaciones
   - Sistema confirma la transacción
   - Servidor se reinicia
   - **Garantía:** Las calificaciones no se pierden

3. **Auditoría Académica:**
   - Histórico de cambios debe mantenerse indefinidamente
   - Crucial para cumplimiento normativo

### Implementación en PostgreSQL

```typescript
// Aplicación de Prisma 7
const enrollment = await prisma.inscripcion.create({
  data: { id_usuario, id_carrera, fecha_inscripcion }
});
// Una vez que create() retorna, el dato está persistido en disco
// PostgreSQL escribe en el Write-Ahead Log (WAL)
```

**Garantías PostgreSQL:**
- Usa Write-Ahead Logging (WAL) para garantizar durabilidad
- Los datos se escriben en disco antes de confirmar la transacción
- En caso de crash, el WAL permite recuperar datos

---

## 6. Tabla Comparativa: ACID en Diferentes Operaciones

| Operación | Atomicidad | Consistencia | Aislamiento | Durabilidad |
|-----------|-----------|-------------|------------|------------|
| Crear Inscripción | ✅ Todo o nada | ✅ Valida restricciones | ✅ Independiente | ✅ Persiste en disco |
| Actualizar Carrera | ✅ Completa o falla | ✅ Mantiene FK | ✅ Otros usos no afectados | ✅ Permanente |
| Listar Materias | N/A | ✅ Lee datos consistentes | ✅ Snapshot actual | ✅ Desde BD persistida |
| Eliminar Usuario | ✅ Todo o nada | ⚠️ Puede fallar si hay FK | ✅ Aislada | ✅ Persistido |

---

## 7. Implementación en Código

### Ejemplo: Transacción Segura de Matriculación

```typescript
async enrollStudentInCourse(idUsuario: number, idMateria: number) {
  try {
    // ATOMICIDAD: Todas las operaciones juntas
    // CONSISTENCIA: Validaciones previas
    const student = await this.prismaUsuarios.usuario.findUnique({
      where: { id_usuario: idUsuario }
    });
    
    if (!student || student.tipo !== 'estudiante') {
      throw new BadRequestException('Invalid student');
    }

    // AISLAMIENTO: Lock de fila en BD
    const course = await this.prismaCarreras.materia.findUnique({
      where: { id_materia: idMateria },
      include: { aula: true }
    });

    if (course.aula.capacidad <= 0) {
      throw new ConflictException('No available seats');
    }

    // Crear inscripción (ACID garantizado por BD)
    const enrollment = await this.prismaUsuarios.inscripcion.create({
      data: {
        id_usuario: idUsuario,
        id_carrera: course.id_carrera,
        fecha_inscripcion: new Date()
      }
    });

    return {
      success: true,
      message: 'Successfully enrolled',
      enrollment
    };
  } catch (error) {
    // Si llegamos aquí, la transacción se revierte automáticamente
    // DURABILIDAD: El fallo también se persiste en logs
    throw error;
  }
}
```

---

## 8. Conclusiones y Recomendaciones

### Fortalezas del Sistema Actual
1. ✅ Prisma 7 + PostgreSQL garantiza ACID nativo
2. ✅ Validaciones de negocio adicionales refuerzan consistencia
3. ✅ Aislamiento automático previene condiciones de carrera
4. ✅ Durabilidad garantizada por WAL de PostgreSQL

### Mejoras Futuras
1. Implementar locks explícitos para operaciones críticas
2. Agregar auditoría (audit tables) para trazabilidad completa
3. Implementar circuit breakers para fallos en cascada
4. Usar transacciones con nivel de aislamiento SERIALIZABLE para operaciones muy críticas

### Recomendaciones
- **Desarrollo:** Usar transactions explícitas para operaciones multi-tabla
- **Testing:** Simular fallos concurrentes con Apache JMeter o k6
- **Monitoreo:** Alertar si hay deadlocks o transacciones largas
- **Backup:** Implementar backup incremental del WAL

---

## Bibliografía

- PostgreSQL Documentation: Transactions (https://www.postgresql.org/docs/current/tutorial-transactions.html)
- Prisma Documentation: Database Transactions (https://www.prisma.io/docs/orm/prisma-client/queries/transactions)
- Date, C. J. (2003). An Introduction to Database Systems (8th ed.)
- Garcia-Molina, H., Ullman, J. D., & Widom, J. (2009). Database Systems: The Complete Book

---

*Documento elaborado como parte de la evaluación de Programación Backend - NestJS*
