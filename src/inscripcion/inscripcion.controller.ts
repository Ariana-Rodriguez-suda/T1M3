import { Controller, Get, Post, Body, Patch, Param, Put, Delete, Query, ParseIntPipe, NotFoundException, UseGuards } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('inscripcion')
@UseGuards(JwtAuthGuard)
export class InscripcionController {
  constructor(private readonly inscripcionService: InscripcionService) {}

  @Post()
  create(@Body() createInscripcionDto: CreateInscripcionDto) {
    return this.inscripcionService.create(createInscripcionDto);
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit;
    const data = await this.inscripcionService.findAll(skip, limit);
    return { page, limit, data };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const inscripcion = await this.inscripcionService.findOne(id);
    if (!inscripcion) throw new NotFoundException(`Inscripcion con id ${id} no encontrada`);
    return inscripcion;
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: number, @Body() dto: UpdateInscripcionDto) {
    return this.inscripcionService.update(id, dto);
  }

  @Put(':id')
  fullUpdate(@Param('id') id: number, @Body() dto: UpdateInscripcionDto) {
    return this.inscripcionService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.inscripcionService.remove(id);
  }

  @Get('by-career/:id_carrera')
  async getEnrollmentsByCarrera(
    @Param('id_carrera', ParseIntPipe) idCarrera: number,
  ) {
    return this.inscripcionService.findEnrollmentsByCarrera(idCarrera);
  }

  @Get('student/:id_usuario/period/:id_periodo')
  async getStudentEnrollmentsByPeriod(
    @Param('id_usuario', ParseIntPipe) idUsuario: number,
    @Param('id_periodo', ParseIntPipe) idPeriodo: number,
  ) {
    return this.inscripcionService.findStudentEnrollmentsByPeriod(idUsuario, idPeriodo);
  }

  @Post('enroll-transactional')
  async enrollStudentInCourseTransactional(
    @Body() dto: { id_usuario: number; id_materia: number },
  ) {
    return this.inscripcionService.enrollStudentInCourse(dto.id_usuario, dto.id_materia);
  }

  @Get('stats/enrollment')
  async getEnrollmentStats() {
    return this.inscripcionService.getEnrollmentStats();
  }
}
