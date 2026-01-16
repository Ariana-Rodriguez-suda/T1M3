import 'dotenv/config'
import { PrismaClient } from './generated/usuarios'

const prisma = new PrismaClient()

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

  // Usuarios
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
        apellido: 'Caicedo',
        dni: '0966443377',
        correo: 'juan@uni.edu',
        clave: '123456',
        tipo: 'profesor',
        rolId: adminRol.id_rol,
      },
      {
        nombre: 'Ana',
        apellido: 'Carrillo',
        dni: '0922443377',
        correo: 'ana@uni.edu',
        clave: '123456',
        tipo: 'estudiante',
        rolId: adminRol.id_rol,
      },
    ],
    skipDuplicates: true,
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())