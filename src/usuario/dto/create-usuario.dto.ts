import { IsString, IsEmail, IsOptional, IsInt } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsString()
  dni: string;

  @IsEmail()
  correo: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsString()
  clave?: string;

  @IsOptional()
  @IsString()
  tipo?: string;

  @IsInt()
  rolId: number;
}
