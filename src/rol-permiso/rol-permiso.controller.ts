import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolPermisoService } from './rol-permiso.service';
import { CreateRolpermisoDto } from './dto/create-rolpermiso.dto';
import { UpdateRolpermisoDto } from './dto/update-rolpermiso.dto';

@Controller('rolpermiso')
export class RolPermisoController {
  constructor(private readonly rolpermisoService: RolPermisoService) {}

  @Post()
  create(@Body() data: CreateRolpermisoDto) {
    return this.rolpermisoService.create(data);
  }

  @Get()
  findAll() {
    return this.rolpermisoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolpermisoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateRolpermisoDto) {
    return this.rolpermisoService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolpermisoService.remove(+id);
  }
}
