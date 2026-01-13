import { IsString, IsDateString } from 'class-validator';

export class CreatePeriodoDto {
  @IsString()
  nombre: string;

  @IsDateString()
  fecha_inicio: string;

  @IsDateString()
  fecha_fin: string;
}
