import { Module } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { InscripcionController } from './inscripcion.controller';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';

@Module({
  controllers: [InscripcionController],
  providers: [InscripcionService, PrismaUsuariosService],
})
export class InscripcionModule {}
