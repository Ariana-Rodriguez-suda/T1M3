import { IsString, IsInt, IsOptional } from 'class-validator'

export class CreateAulaDto {
  @IsString()
  nombre_aula: string

  @IsInt()
  capacidad: number

  @IsOptional()
  @IsString()
  ubicacion?: string
}
