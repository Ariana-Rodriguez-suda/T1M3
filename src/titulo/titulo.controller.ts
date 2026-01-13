import { Controller, Get, Post, Body, Patch, Param, Put, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { TituloService } from './titulo.service';
import { CreateTituloDto } from './dto/create-titulo.dto';
import { UpdateTituloDto } from './dto/update-titulo.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('titulo')
@UseGuards(JwtAuthGuard)
export class TituloController {
  constructor(private readonly tituloService: TituloService) {}

  @Post()
  create(@Body() createTituloDto: CreateTituloDto) {
    return this.tituloService.create(createTituloDto)
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit
    const data = await this.tituloService.findAll(skip, limit)
    return { page, limit, data }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const titulo = await this.tituloService.findOne(id)
    if (!titulo) throw new NotFoundException(`Titulo con id ${id} no encontrado`)
    return titulo
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() dto: UpdateTituloDto) {
    return this.tituloService.update(+id, dto);
  }

  @Put(':id')
  fullUpdate(@Param('id') id: string, @Body() dto: UpdateTituloDto) {
    return this.tituloService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tituloService.remove(+id);
  }
}
