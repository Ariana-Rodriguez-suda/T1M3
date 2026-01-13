import { Controller, Post, Body, UnauthorizedException, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    const { correo, clave } = body;

    const user = await this.authService.validateUser(correo, clave);

    if (!user) throw new UnauthorizedException('Credenciales incorrectas');

    return this.authService.login(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('perfil')
  getPerfil(@Req() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user; // Esto viene del JWT payload
  }
}
