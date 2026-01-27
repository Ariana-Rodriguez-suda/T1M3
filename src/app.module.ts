import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaUsuariosService } from './prisma/prisma-usuarios.service';
import { PrismaCarrerasService } from './prisma/prisma-carreras.service';
import { PrismaProfesorService } from './prisma/prisma-profesor.service';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MateriaModule } from './materia/materia.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';

@Module({
  imports: [
    AuthModule,
    UsuarioModule,
    MateriaModule,
    InscripcionModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaUsuariosService, PrismaCarrerasService, PrismaProfesorService],
})
export class AppModule {}
