import 'dotenv/config'
import { PrismaClient } from './generated/carreras'

const prisma = new PrismaClient()

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
      { nombre_aula: 'Laboratorio', capacidad: 25, ubicacion: 'Lab' },
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
    ],
    skipDuplicates: true,
  })

  const carrera = await prisma.carrera.findFirst()
  const aula = await prisma.aula.findFirst()
  const periodo = await prisma.periodo.findFirst()

  if (!carrera || !aula || !periodo) {
    throw new Error('Datos base incompletos')
  }

  // Materias
  await prisma.materia.createMany({
    data: [
      {
        nombre_materia: 'Programación I',
        id_carrera: carrera.id_carrera,
        id_aula: aula.id_aula,
        periodoId: periodo.id_periodo,
        id_inscripcion: null, // relación lógica futura
      },
      {
        nombre_materia: 'Bases de Datos',
        id_carrera: carrera.id_carrera,
        id_aula: aula.id_aula,
        periodoId: periodo.id_periodo,
        id_inscripcion: null,
      },
    ],
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())