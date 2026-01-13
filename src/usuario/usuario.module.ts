import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaUsuariosService],
})
export class UsuarioModule {}
