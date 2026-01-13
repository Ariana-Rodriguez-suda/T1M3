import { IsInt, IsDateString } from 'class-validator';

export class CreateInscripcionDto {
  @IsInt()
  id_usuario: number;

  @IsInt()
  id_carrera: number;

  @IsDateString()
  fecha_inscripcion: string;
}
