import {
  Controller, Get, Post, Body, Patch, Param, Delete,
  Query, ParseIntPipe, NotFoundException, UseGuards
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('usuario')
@UseGuards(JwtAuthGuard)
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.create(dto);
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit;
    const data = await this.usuarioService.findAll(skip, limit);
    return { page, limit, data };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const usuario = await this.usuarioService.findOne(id);
    if (!usuario)
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    return usuario;
  }

  @Patch(':id')
  partialUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.remove(id);
  }

  @Get('search/active-students')
  async getActiveStudents() {
    return this.usuarioService.findActiveStudentsWithCareer();
  }

  @Get('search/teachers-multiple-subjects')
  async getTeachersWithMultipleSubjects() {
    return this.usuarioService.findTeachersWithMultipleSubjects();
  }

  @Get('search/student-enrollments/:id_usuario/:id_periodo')
  async getStudentEnrollments(
    @Param('id_usuario', ParseIntPipe) idUsuario: number,
    @Param('id_periodo', ParseIntPipe) idPeriodo: number,
  ) {
    return this.usuarioService.findStudentEnrollmentsByPeriod(idUsuario, idPeriodo);
  }

  @Get('search/active-students-career/:id_carrera')
  async getActiveStudentsByCareer(
    @Param('id_carrera', ParseIntPipe) idCarrera: number,
  ) {
    return this.usuarioService.findActiveStudentsByCareerAndPeriod(idCarrera);
  }

  @Get('search/active-teachers')
  async getActiveTeachers() {
    return this.usuarioService.findActiveTeachers();
  }

  @Get('search/students-by-career/:id_carrera')
  async getStudentsByCareer(
    @Param('id_carrera', ParseIntPipe) idCarrera: number,
    @Query('role') role?: string,
  ) {
    return this.usuarioService.findStudentsByCareerAndRole(idCarrera, role);
  }
}
