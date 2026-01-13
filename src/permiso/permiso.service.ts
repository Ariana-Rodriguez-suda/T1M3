import { Injectable } from '@nestjs/common';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';

@Injectable()
export class PermisoService {
  constructor(private prisma: PrismaUsuariosService) {}

  create(dto: CreatePermisoDto) {
    return this.prisma.permiso.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.permiso.findMany({
      include: { rolPermisos: true },
    });
  }

  findOne(id: number) {
    return this.prisma.permiso.findUnique({
      where: { id_permiso: id },
      include: { rolPermisos: true },
    });
  }

  update(id: number, dto: UpdatePermisoDto) {
    return this.prisma.permiso.update({
      where: { id_permiso: id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.permiso.delete({
      where: { id_permiso: id },
    });
  }
}
