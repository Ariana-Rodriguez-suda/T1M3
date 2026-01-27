import { Injectable } from '@nestjs/common';
import { PrismaCarrerasService } from 'src/prisma/prisma-carreras.service';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
  constructor(
    private prisma: PrismaCarrerasService,
    private prismaUsuarios: PrismaUsuariosService,
  ) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.materia.findMany({
      skip,
      take,
      include: {
        carrera: true,
        aula: true,
        periodo: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.materia.findUnique({
      where: { id_materia: id },
      include: {
        carrera: true,
        aula: true,
        periodo: true,
      },
    });
  }

  create(dto: CreateMateriaDto) {
    const { id_carrera, id_aula, periodoId, id_inscripcion, nombre_materia } = dto;

    return this.prisma.materia.create({
      data: {
        nombre_materia,
        id_inscripcion: id_inscripcion ?? null,
        carrera: { connect: { id_carrera } },
        aula: { connect: { id_aula } },
        ...(periodoId && { periodo: { connect: { id_periodo: periodoId } } }),
      },
    });
  }

  update(id: number, dto: UpdateMateriaDto) {
    const { id_carrera, id_aula, periodoId, id_inscripcion, ...rest } = dto;

    return this.prisma.materia.update({
      where: { id_materia: id },
      data: {
        ...rest,
        ...(id_inscripcion !== undefined && { id_inscripcion }),

        ...(id_carrera && { carrera: { connect: { id_carrera } } }),
        ...(id_aula && { aula: { connect: { id_aula } } }),
        ...(periodoId && { periodo: { connect: { id_periodo: periodoId } } }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.materia.delete({
      where: { id_materia: id },
    });
  }

  async findMateriasByCarrera(idCarrera: number) {
    return this.prisma.materia.findMany({
      where: {
        id_carrera: idCarrera,
      },
      include: {
        carrera: true,
        aula: true,
        periodo: true,
      },
    });
  }

  async findMateriasByCarreraAndPeriodo(idCarrera: number, idPeriodo: number) {
    return this.prisma.materia.findMany({
      where: {
        AND: [
          { id_carrera: idCarrera },
          { periodoId: idPeriodo },
        ],
      },
      include: {
        carrera: true,
        aula: true,
        periodo: true,
      },
    });
  }

  async findAvailableMaterias() {
    return this.prisma.materia.findMany({
      include: {
        carrera: true,
        aula: true,
        periodo: true,
      },
    });
  }

  async getStudentMateriaCountReport() {
    const result = await this.prisma.$queryRaw`
      SELECT 
        c.id_carrera,
        c.nombre_carrera,
        COUNT(m.id_materia)::int as total_materias,
        a.nombre_aula,
        a.capacidad
      FROM "Carrera" c
      LEFT JOIN "Materia" m ON c.id_carrera = m.id_carrera
      LEFT JOIN "Aula" a ON m.id_aula = a.id_aula
      GROUP BY c.id_carrera, c.nombre_carrera, a.nombre_aula, a.capacidad
      ORDER BY total_materias DESC
    `;
    
    return result;
  }

  /**
   * Reporte alternativo más simple: Contar materias por carrera
   */
  async getMateriaCountByCarrera() {
    return this.prisma.$queryRaw`
      SELECT 
        c.id_carrera,
        c.nombre_carrera,
        COUNT(m.id_materia) as total_materias,
      LEFT JOIN "Materia" m ON c.id_carrera = m.id_carrera
      LEFT JOIN "Aula" a ON m.id_aula = a.id_aula
      GROUP BY c.id_carrera, c.nombre_carrera, a.nombre_aula, a.capacidad
      ORDER BY total_materias DESC
    `;
  }
}
