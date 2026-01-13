import { Controller, Get, Post, Body, Patch, Put, Param, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('carrera')
@UseGuards(JwtAuthGuard)
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Post()
  create(@Body() createCarreraDto: CreateCarreraDto) {
    return this.carreraService.create(createCarreraDto)
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit
    const data = await this.carreraService.findAll(skip, limit)
    return { page, limit, data }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const carrera = await this.carreraService.findOne(id)
    if (!carrera) throw new NotFoundException(`Carrera con id ${id} no encontrado`)
    return carrera
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() dto: UpdateCarreraDto) {
    return this.carreraService.update(+id, dto);
  }

  @Put(':id')
  fullUpdate(@Param('id') id: string, @Body() dto: UpdateCarreraDto) {
    return this.carreraService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carreraService.remove(+id);
  }
}
