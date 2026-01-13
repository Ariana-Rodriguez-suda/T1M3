import { Module } from '@nestjs/common';
import { RolPermisoController } from './rol-permiso.controller';
import { RolPermisoService } from './rol-permiso.service';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';

@Module({
  controllers: [RolPermisoController],
  providers: [RolPermisoService, PrismaUsuariosService]
})
export class RolPermisoModule {}
