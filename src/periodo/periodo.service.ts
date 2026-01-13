import { Injectable } from '@nestjs/common';
import { PrismaCarrerasService } from 'src/prisma/prisma-carreras.service';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';

@Injectable()
export class PeriodoService {
  constructor(private prisma: PrismaCarrerasService) {}

  findAll() {
    return this.prisma.periodo.findMany({
      include: {
        materias: true, // opcional, pero útil
      },
    });
  }

  findOne(id: number) {
    return this.prisma.periodo.findUnique({
      where: { id_periodo: id },
      include: {
        materias: true,
      },
    });
  }

  create(dto: CreatePeriodoDto) {
    return this.prisma.periodo.create({
      data: {
        nombre: dto.nombre,
        fecha_inicio: new Date(dto.fecha_inicio),
        fecha_fin: new Date(dto.fecha_fin),
      },
    });
  }

  update(id: number, dto: UpdatePeriodoDto) {
    return this.prisma.periodo.update({
      where: { id_periodo: id },
      data: {
        ...(dto.nombre && { nombre: dto.nombre }),
        ...(dto.fecha_inicio && { fecha_inicio: new Date(dto.fecha_inicio) }),
        ...(dto.fecha_fin && { fecha_fin: new Date(dto.fecha_fin) }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.periodo.delete({
      where: { id_periodo: id },
    });
  }
}
