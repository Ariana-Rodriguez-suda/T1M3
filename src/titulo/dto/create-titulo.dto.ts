import { IsString, IsInt } from 'class-validator'

export class CreateTituloDto {
  @IsInt()
  id_profesor: number

  @IsString()
  nombre_titulo: string

  @IsString()
  institucion: string

  @IsInt()
  ano_obtencion: number   // <-- Cambiado
}
