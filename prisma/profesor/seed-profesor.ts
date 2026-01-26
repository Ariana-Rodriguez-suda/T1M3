import 'dotenv/config'
import { PrismaClient } from '../generated/profesor'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_PROFESOR
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.profesor.createMany({
    data: [
      { userId: 2 },
      { userId: 3 },
    ],
  })

  const profesores = await prisma.profesor.findMany()

  await prisma.titulo.createMany({
    data: [
      {
        id_profesor: profesores[0].id_profesor,
        nombre_titulo: 'Ingeniero en Sistemas',
        institucion: 'Universidad Nacional',
        ano_obtencion: 2015,
      },
      {
        id_profesor: profesores[0].id_profesor,
        nombre_titulo: 'Magíster en Software',
        institucion: 'Universidad Técnica',
        ano_obtencion: 2018,
      },
      {
        id_profesor: profesores[1].id_profesor,
        nombre_titulo: 'Licenciada en Matemáticas',
        institucion: 'Universidad Central',
        ano_obtencion: 2014,
      },
      {
        id_profesor: profesores[1].id_profesor,
        nombre_titulo: 'Doctora en Educación',
        institucion: 'Universidad del Pacífico',
        ano_obtencion: 2020,
      },
    ],
  })

  console.log('✅ Seed profesor completado')
  console.log(`   - 2 profesores creados con userId`)
  console.log(`   - 4 títulos creados`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())