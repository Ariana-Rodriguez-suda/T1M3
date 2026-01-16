import { Module } from '@nestjs/common';
import { PeriodoService } from './periodo.service';
import { PeriodoController } from './periodo.controller';
import { PrismaCarrerasService } from 'src/prisma/prisma-carreras.service';

@Module({
  controllers: [PeriodoController],
  providers: [PeriodoService, PrismaCarrerasService],
})
export class PeriodoModule {}
