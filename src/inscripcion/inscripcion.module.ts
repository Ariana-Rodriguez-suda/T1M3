import { Module } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { InscripcionController } from './inscripcion.controller';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';
import { PrismaCarrerasService } from 'src/prisma/prisma-carreras.service';

@Module({
  controllers: [InscripcionController],
  providers: [InscripcionService, PrismaUsuariosService, PrismaCarrerasService],
})
export class InscripcionModule {}
