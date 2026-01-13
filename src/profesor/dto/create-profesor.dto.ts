import { IsInt, IsOptional } from 'class-validator';

export class CreateProfesorDto {
  @IsOptional()
  @IsInt()
  userId?: number;   // porque en el schema es opcional
}
