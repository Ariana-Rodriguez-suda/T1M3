import { Controller, Get, Post, Body, Patch, Put, Param, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { JwtAuthGuard } from 'src/Auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('materia')
@UseGuards(JwtAuthGuard)
export class MateriaController {
  constructor(private readonly materiaService: MateriaService) {}

  @Post()
  create(@Body() createMateriaDto: CreateMateriaDto) {
    return this.materiaService.create(createMateriaDto)
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit
    const data = await this.materiaService.findAll(skip, limit)
    return { page, limit, data }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const materia = await this.materiaService.findOne(id)
    if (!materia) throw new NotFoundException(`Materia con id ${id} no encontrado`)
    return materia
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() dto: UpdateMateriaDto) {
    return this.materiaService.update(+id, dto);
  }

  @Put(':id')
  fullUpdate(@Param('id') id: string, @Body() dto: UpdateMateriaDto) {
    return this.materiaService.update(+id, dto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaService.remove(+id);
  }
}
