import { PrismaClient } from "./generated/usuarios";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.rol.create({
    data: { nombre: 'ADMIN' }
  });

  await prisma.usuario.create({
    data: {
      nombre: 'Juan',
      apellido: 'Perez',
      dni: '12345678',
      correo: 'admin@uni.edu',
      rolId: admin.id_rol
    }
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
