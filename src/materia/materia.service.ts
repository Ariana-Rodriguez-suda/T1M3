import { Injectable } from '@nestjs/common';
import { PrismaCarrerasService } from 'src/prisma/prisma-carreras.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
  constructor(private prisma: PrismaCarrerasService) {}

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
}
