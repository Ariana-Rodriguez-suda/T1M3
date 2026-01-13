import { Injectable } from '@nestjs/common';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';

@Injectable()
export class InscripcionService {
  constructor(private prisma: PrismaUsuariosService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.inscripcion.findMany({
      skip,
      take,
      include: {
        usuario: true, // porque AHORA SÍ existe relación
      },
    });
  }

  findOne(id: number) {
    return this.prisma.inscripcion.findUnique({
      where: { id_inscripcion: id },
      include: { usuario: true },
    });
  }

  create(dto: CreateInscripcionDto) {
    const { id_usuario, id_carrera, fecha_inscripcion } = dto;

    return this.prisma.inscripcion.create({
      data: {
        id_usuario,
        id_carrera,
        fecha_inscripcion: new Date(fecha_inscripcion),
      },
    });
  }

  update(id: number, dto: UpdateInscripcionDto) {
    const { fecha_inscripcion, ...rest } = dto;

    return this.prisma.inscripcion.update({
      where: { id_inscripcion: id },
      data: {
        ...rest,
        ...(fecha_inscripcion && { fecha_inscripcion: new Date(fecha_inscripcion) }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.inscripcion.delete({
      where: { id_inscripcion: id },
    });
  }
}
