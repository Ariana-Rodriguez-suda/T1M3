import { IsString, IsInt } from 'class-validator'

export class CreateCarreraDto {
  @IsString()
  nombre_carrera: string

  @IsInt()
  duracion_anos: number
}
