import { Injectable } from '@nestjs/common';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaUsuariosService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.usuario.findMany({
      skip,
      take,
      include: {
        rol: true,
        inscripciones: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id_usuario: id },
      include: {
        rol: true,
        inscripciones: true,
      },
    });
  }

  create(data: CreateUsuarioDto) {
    return this.prisma.usuario.create({
      data,
    });
  }

  update(id: number, data: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: { id_usuario: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.usuario.delete({
      where: { id_usuario: id },
    });
  }
}
