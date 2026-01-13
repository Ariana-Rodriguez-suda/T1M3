import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';

@Module({
  controllers: [RolController],
  providers: [RolService, PrismaUsuariosService],
})
export class RolModule {}
