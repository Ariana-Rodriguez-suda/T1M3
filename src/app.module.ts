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
import { AulaModule } from './aula/aula.module';
import { CarreraModule } from './carrera/carrera.module';
import { PeriodoModule } from './periodo/periodo.module';
import { ProfesorModule } from './profesor/profesor.module';
import { RolModule } from './rol/rol.module';
import { PermisoModule } from './permiso/permiso.module';
import { TituloModule } from './titulo/titulo.module';
import { RolPermisoModule } from './rol-permiso/rol-permiso.module';

@Module({
  imports: [
    AuthModule,
    UsuarioModule,
    MateriaModule,
    InscripcionModule,
    AulaModule,
    CarreraModule,
    PeriodoModule,
    ProfesorModule,
    RolModule,
    PermisoModule,
    TituloModule,
    RolPermisoModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaUsuariosService, PrismaCarrerasService, PrismaProfesorService],
})
export class AppModule {}
