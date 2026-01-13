import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaUsuariosService } from 'src/prisma/prisma-usuarios.service';
import { Usuario } from 'prisma/generated/usuarios';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaUsuarios: PrismaUsuariosService,
  ) {}

  async validateUser(correo: string, clave: string): Promise<Usuario | null> {
    // Buscar usuario real en la BD
    const user = await this.prismaUsuarios.usuario.findUnique({
      where: { correo },
    });

    if (!user) return null;
    if (user.clave !== clave) return null;

    return user;
  }
  async login(user: Usuario) {
    const payload = {
      sub: user.id_usuario,
      correo: user.correo,
      rol: user.rolId,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
