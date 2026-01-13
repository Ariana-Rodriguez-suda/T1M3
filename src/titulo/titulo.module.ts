import { Module } from '@nestjs/common';
import { TituloService } from './titulo.service';
import { TituloController } from './titulo.controller';
import { PrismaProfesorService } from 'src/prisma/prisma-profesor.service';

@Module({
  controllers: [TituloController],
  providers: [TituloService, PrismaProfesorService],
})
export class TituloModule {}
