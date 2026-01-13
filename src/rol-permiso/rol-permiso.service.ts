import { Injectable } from '@nestjs/common';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';
import { CreateRolpermisoDto } from './dto/create-rolpermiso.dto';
import { UpdateRolpermisoDto } from './dto/update-rolpermiso.dto';

@Injectable()
export class RolPermisoService {
  constructor(private readonly prisma: PrismaUsuariosService) {}

  create(data: CreateRolpermisoDto) {
    return this.prisma.rolPermiso.create({ data });
  }

  findAll() {
    return this.prisma.rolPermiso.findMany({
      include: { rol: true, permiso: true },
    });
  }

  findOne(id: number) {
    return this.prisma.rolPermiso.findUnique({
      where: { id },
      include: { rol: true, permiso: true },
    });
  }

  update(id: number, data: UpdateRolpermisoDto) {
    return this.prisma.rolPermiso.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.rolPermiso.delete({
      where: { id },
    });
  }
}
