import 'dotenv/config'
import { PrismaClient } from './generated/profesor'

const prisma = new PrismaClient()

async function main() {
  // Crear profesores SIN userId (relación lógica futura)
  await prisma.profesor.createMany({
    data: [{}, {}, {}, {}],
  })

  const profesores = await prisma.profesor.findMany()

  // Crear títulos
  await prisma.titulo.createMany({
    data: profesores.map((profesor, index) => ({
      id_profesor: profesor.id_profesor,
      nombre_titulo: [
        'Ingeniero en Sistemas',
        'Licenciado en Matemáticas',
        'Magíster en Educación',
        'Doctor en Ciencias',
      ][index % 4],
      institucion: 'Universidad Nacional',
      ano_obtencion: 2015 + index,
    })),
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())