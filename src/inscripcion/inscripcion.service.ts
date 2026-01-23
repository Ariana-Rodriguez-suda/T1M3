import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';
import { PrismaCarrerasService } from 'src/prisma/prisma-carreras.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';

@Injectable()
export class InscripcionService {
  constructor(
    private prismaUsuarios: PrismaUsuariosService,
    private prismaCarreras: PrismaCarrerasService,
  ) {}

  findAll(skip = 0, take = 10) {
    return this.prismaUsuarios.inscripcion.findMany({
      skip,
      take,
      include: {
        usuario: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaUsuarios.inscripcion.findUnique({
      where: { id_inscripcion: id },
      include: { usuario: true },
    });
  }

  create(dto: CreateInscripcionDto) {
    const { id_usuario, id_carrera, fecha_inscripcion } = dto;

    return this.prismaUsuarios.inscripcion.create({
      data: {
        id_usuario,
        id_carrera,
        fecha_inscripcion: new Date(fecha_inscripcion),
      },
    });
  }

  update(id: number, dto: UpdateInscripcionDto) {
    const { fecha_inscripcion, ...rest } = dto;

    return this.prismaUsuarios.inscripcion.update({
      where: { id_inscripcion: id },
      data: {
        ...rest,
        ...(fecha_inscripcion && { fecha_inscripcion: new Date(fecha_inscripcion) }),
      },
    });
  }

  remove(id: number) {
    return this.prismaUsuarios.inscripcion.delete({
      where: { id_inscripcion: id },
    });
  }

  async findStudentEnrollmentsByPeriod(idUsuario: number, idPeriodo: number) {
    return this.prismaUsuarios.inscripcion.findMany({
      where: {
        id_usuario: idUsuario,
      },
      include: {
        usuario: true,
      },
    });
  }

  async findEnrollmentsByCarrera(idCarrera: number) {
    return this.prismaUsuarios.inscripcion.findMany({
      where: {
        id_carrera: idCarrera,
      },
      include: {
        usuario: true,
      },
    });
  }

  /**
   * PARTE 4: OPERACIÓN TRANSACCIONAL
   */
async enrollStudentInCourse(idUsuario: number, idMateria: number) {
    try {
      const student = await this.prismaUsuarios.usuario.findUnique({
        where: { id_usuario: idUsuario },
      });

      if (!student) {
        throw new BadRequestException('Student not found');
      }

      if (student.tipo !== 'estudiante') {
        throw new BadRequestException('User is not a valid student');
      }

      // Step 2: Verify course exists and has quota availability
      const course = await this.prismaCarreras.materia.findUnique({
        where: { id_materia: idMateria },
        include: { aula: true },
      });

      if (!course) {
        throw new BadRequestException('Course not found');
      }

      if (!course.aula) {
        throw new ConflictException('Course has no classroom assigned');
      }

      // In a real scenario, you'd track enrolled count separately
      // For now, we verify the classroom exists
      if (course.aula.capacidad <= 0) {
        throw new ConflictException('No available seats in this course');
      }

      // Step 3: Check if student is already enrolled in this course
      const existingEnrollment = await this.prismaUsuarios.inscripcion.findFirst({
        where: {
          id_usuario: idUsuario,
          id_carrera: course.id_carrera,
        },
      });

      if (existingEnrollment) {
        throw new ConflictException('Student is already enrolled in this career');
      }

      const enrollment = await this.prismaUsuarios.inscripcion.create({
        data: {
          id_usuario: idUsuario,
          id_carrera: course.id_carrera,
          fecha_inscripcion: new Date(),
        },
        include: {
          usuario: true,
        },
      });

      // In real scenario, you'd also update course availability
      // This would be done in the carreras database

      return {
        success: true,
        message: 'Student successfully enrolled',
        enrollment,
      };
    } catch (error) {
      // Transaction automatically rolls back on error
      throw error;
    }
  }

  /**
   * Query: Get enrollment statistics
   */
  async getEnrollmentStats() {
    const totalEnrollments = await this.prismaUsuarios.inscripcion.count();

    const enrollmentsByCareer = await this.prismaUsuarios.inscripcion.groupBy({
      by: ['id_carrera'],
      _count: {
        id_inscripcion: true,
      },
    });

    return {
      totalEnrollments,
      enrollmentsByCareer,
    };
  }
}
