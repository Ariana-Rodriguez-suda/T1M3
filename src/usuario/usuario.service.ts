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

  async findActiveStudentsWithCareer() {
    return this.prisma.usuario.findMany({
      where: {
        tipo: 'estudiante',
      },
      include: {
        inscripciones: true,
        rol: true,
      },
    });
  }

  async getCareerMaterias(idCarrera: number) {
    return this.prisma.$queryRaw`
      SELECT m.* FROM "Materia" m
      WHERE m.id_carrera = ${idCarrera}
    `;
  }

  async findTeachersWithMultipleSubjects() {
    return this.prisma.usuario.findMany({
      where: {
        tipo: 'profesor',
      },
      include: {
        rol: true,
      },
    });
  }

  async findStudentEnrollmentsByPeriod(idUsuario: number, idPeriodo: number) {
    return this.prisma.inscripcion.findMany({
      where: {
        id_usuario: idUsuario,
      },
      include: {
        usuario: true,
      },
    });
  }

  async findActiveStudentsByCareerAndPeriod(idCarrera: number) {
    return this.prisma.usuario.findMany({
      where: {
        AND: [
          { tipo: 'estudiante' },
          { inscripciones: { some: { id_carrera: idCarrera } } },
        ],
      },
      include: {
        inscripciones: true,
        rol: true,
      },
    });
  }

  async findActiveTeachers() {
    return this.prisma.usuario.findMany({
      where: {
        AND: [
          { tipo: 'profesor' },
          { NOT: { tipo: 'inactivo' } },
        ],
      },
      include: {
        rol: true,
      },
    });
  }

  async findStudentsByCareerAndRole(idCarrera: number, roleFilter?: string) {
    return this.prisma.usuario.findMany({
      where: {
        AND: [
          { tipo: 'estudiante' },
          { inscripciones: { some: { id_carrera: idCarrera } } },
          roleFilter ? { rol: { nombre: roleFilter } } : {},
        ],
      },
      include: {
        inscripciones: true,
        rol: true,
      },
    });
  }
}
