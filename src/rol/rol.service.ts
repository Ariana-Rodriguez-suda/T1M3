import { Injectable } from '@nestjs/common';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolService {
  constructor(private prisma: PrismaUsuariosService) {}

  create(dto: CreateRolDto) {
    return this.prisma.rol.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.rol.findMany({
      include: { usuarios: true, permisos: true },
    });
  }

  findOne(id: number) {
    return this.prisma.rol.findUnique({
      where: { id_rol: id },
      include: { usuarios: true, permisos: true },
    });
  }

  update(id: number, dto: UpdateRolDto) {
    return this.prisma.rol.update({
      where: { id_rol: id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.rol.delete({
      where: { id_rol: id },
    });
  }
}
