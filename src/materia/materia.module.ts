import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { PrismaCarrerasService } from 'src/prisma/prisma-carreras.service';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';

@Module({
  controllers: [MateriaController],
  providers: [MateriaService, PrismaCarrerasService, PrismaUsuariosService],
})
export class MateriaModule {}
