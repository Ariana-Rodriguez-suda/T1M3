import { Module } from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { PermisoController } from './permiso.controller';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';

@Module({
  controllers: [PermisoController],
  providers: [PermisoService, PrismaUsuariosService],
})
export class PermisoModule {}
