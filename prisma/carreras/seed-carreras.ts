import 'dotenv/config'
import { PrismaClient } from '../generated/carreras'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_CARRERAS
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.carrera.createMany({
    data: [
      { nombre_carrera: 'Ingeniería en Sistemas', duracion_anos: 5 },
      { nombre_carrera: 'Medicina', duracion_anos: 6 },
    ],
    skipDuplicates: true,
  })

  await prisma.aula.createMany({
    data: [
      { nombre_aula: 'Aula A1', capacidad: 30, ubicacion: 'Edificio A' },
      { nombre_aula: 'Laboratorio B', capacidad: 25, ubicacion: 'Edificio B' },
      { nombre_aula: 'Auditorio', capacidad: 100, ubicacion: 'Edificio C' },
    ],
    skipDuplicates: true,
  })

  await prisma.periodo.createMany({
    data: [
      {
        nombre: '2024-I',
        fecha_inicio: new Date('2024-01-01'),
        fecha_fin: new Date('2024-06-30'),
      },
      {
        nombre: '2024-II',
        fecha_inicio: new Date('2024-07-01'),
        fecha_fin: new Date('2024-12-31'),
      },
    ],
    skipDuplicates: true,
  })

  const carreras = await prisma.carrera.findMany()
  const aulas = await prisma.aula.findMany()
  const periodos = await prisma.periodo.findMany()

  const carreraIngenieria = carreras.find((c) => c.nombre_carrera.includes('Sistemas'))
  const carreraMedicina = carreras.find((c) => c.nombre_carrera === 'Medicina')
  const periodo1 = periodos[0]

  if (!carreraIngenieria || !carreraMedicina || !periodo1) {
    throw new Error('Datos base incompletos')
  }

  await prisma.materia.createMany({
    data: [
      {
        nombre_materia: 'Programación I',
        id_carrera: carreraIngenieria.id_carrera,
        id_aula: aulas[0].id_aula,
        periodoId: periodo1.id_periodo,
        id_inscripcion: 1,
      },
      {
        nombre_materia: 'Bases de Datos',
        id_carrera: carreraIngenieria.id_carrera,
        id_aula: aulas[0].id_aula,
        periodoId: periodo1.id_periodo,
        id_inscripcion: 1,
      },
      {
        nombre_materia: 'Estructuras de Datos',
        id_carrera: carreraIngenieria.id_carrera,
        id_aula: aulas[1].id_aula,
        periodoId: periodo1.id_periodo,
        id_inscripcion: 2,
      },
      {
        nombre_materia: 'Anatomía I',
        id_carrera: carreraMedicina.id_carrera,
        id_aula: aulas[2].id_aula,
        periodoId: periodo1.id_periodo,
        id_inscripcion: 3,
      },
      {
        nombre_materia: 'Fisiología',
        id_carrera: carreraMedicina.id_carrera,
        id_aula: aulas[2].id_aula,
        periodoId: periodo1.id_periodo,
        id_inscripcion: 3,
      },
    ],
    skipDuplicates: true,
  })

  console.log('✅ Seed carreras completado')
  console.log(`   - 2 carreras creadas`)
  console.log(`   - 3 aulas creadas`)
  console.log(`   - 2 periodos creados`)
  console.log(`   - 5 materias creadas con id_inscripcion válidos`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())