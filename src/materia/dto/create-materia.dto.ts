import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateMateriaDto {
  @IsString()
  nombre_materia: string;

  @IsInt()
  id_carrera: number;

  @IsInt()
  id_aula: number;

  @IsOptional()
  @IsInt()
  periodoId?: number;

  @IsOptional()
  @IsInt()
  id_inscripcion?: number;
}
