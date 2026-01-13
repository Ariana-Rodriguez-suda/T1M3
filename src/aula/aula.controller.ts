import { Controller, Get, Post, Put, Body, Patch, Param, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { AulaService } from './aula.service';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('aula')
@UseGuards(JwtAuthGuard)
export class AulaController {
  constructor(private readonly aulaService: AulaService) {}

  @Post()
  create(@Body() createAulaDto: CreateAulaDto) {
    return this.aulaService.create(createAulaDto)
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10,
  ) {
    const skip = (page - 1) * limit
    const data = await this.aulaService.findAll(skip, limit)
    return { page, limit, data }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const aula = await this.aulaService.findOne(id)
    if (!aula) throw new NotFoundException(`Aula con id ${id} no encontrado`)
    return aula
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() dto: UpdateAulaDto) {
    return this.aulaService.update(+id, dto);
  }

  @Put(':id')
  fullUpdate(@Param('id') id: string, @Body() dto: UpdateAulaDto) {
    return this.aulaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aulaService.remove(+id);
  }
}
