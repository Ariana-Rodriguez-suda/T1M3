import 'dotenv/config'
import { PrismaClient } from '../generated/usuarios'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_USUARIOS
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })


async function main() {

  await prisma.rol.createMany({
    data: [
      { nombre: 'ADMIN' },
      { nombre: 'PROFESOR' },
      { nombre: 'ESTUDIANTE' },
    ],
    skipDuplicates: true,
  })

  // Permisos
  await prisma.permiso.createMany({
    data: [
      { nombre: 'CREAR' },
      { nombre: 'LEER' },
      { nombre: 'ACTUALIZAR' },
      { nombre: 'ELIMINAR' },
      { nombre: 'GESTIONAR' },
    ],
    skipDuplicates: true,
  })

  const adminRol = await prisma.rol.findFirst({
    where: { nombre: 'ADMIN' },
  })

  if (!adminRol) throw new Error('Rol ADMIN no encontrado')

  const permisos = await prisma.permiso.findMany()

  for (const permiso of permisos) {
    await prisma.rolPermiso.create({
      data: {
        rolId: adminRol.id_rol,
        permisoId: permiso.id_permiso,
      },
    })
  }

  const estudianteRol = await prisma.rol.findFirst({
    where: { nombre: 'ESTUDIANTE' },
  })

  const profesorRol = await prisma.rol.findFirst({
    where: { nombre: 'PROFESOR' },
  })

  if (!estudianteRol || !profesorRol) {
    throw new Error('Roles no encontrados')
  }

  await prisma.usuario.createMany({
    data: [
      {
        nombre: 'Admin',
        apellido: 'Principal',
        dni: '0988443377',
        correo: 'admin@uni.edu',
        clave: '123456',
        tipo: 'admin',
        rolId: adminRol.id_rol,
      },
      {
        nombre: 'Juan',
        apellido: 'Pérez',
        dni: '0966443377',
        correo: 'juan@uni.edu',
        clave: '123456',
        tipo: 'profesor',
        rolId: profesorRol.id_rol,
      },
      {
        nombre: 'María',
        apellido: 'García',
        dni: '0955443377',
        correo: 'maria@uni.edu',
        clave: '123456',
        tipo: 'profesor',
        rolId: profesorRol.id_rol,
      },
      {
        nombre: 'Ana',
        apellido: 'Carrillo',
        dni: '0922443377',
        correo: 'ana@uni.edu',
        clave: '123456',
        tipo: 'estudiante',
        rolId: estudianteRol.id_rol,
      },
      {
        nombre: 'Carlos',
        apellido: 'Mendoza',
        dni: '0933554477',
        correo: 'carlos@uni.edu',
        clave: '123456',
        tipo: 'estudiante',
        rolId: estudianteRol.id_rol,
      },
      {
        nombre: 'Laura',
        apellido: 'Rojas',
        dni: '0944665588',
        correo: 'laura@uni.edu',
        clave: '123456',
        tipo: 'estudiante',
        rolId: estudianteRol.id_rol,
      },
    ],
    skipDuplicates: true,
  })

  const estudiantes = await prisma.usuario.findMany({
    where: { tipo: 'estudiante' },
  })

  await prisma.inscripcion.createMany({
    data: [
      {
        id_usuario: estudiantes[0].id_usuario,
        id_carrera: 1,
        fecha_inscripcion: new Date('2024-01-15'),
      },
      {
        id_usuario: estudiantes[1].id_usuario,
        id_carrera: 1,
        fecha_inscripcion: new Date('2024-01-16'),
      },
      {
        id_usuario: estudiantes[2].id_usuario,
        id_carrera: 2,
        fecha_inscripcion: new Date('2024-01-17'),
      },
    ],
    skipDuplicates: true,
  })

  console.log('✅ Seed usuarios completado')
  console.log(`   - 6 usuarios creados`)
  console.log(`   - 3 inscripciones creadas`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())