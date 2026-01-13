import { IsInt } from 'class-validator';

export class CreateRolpermisoDto {
  @IsInt()
  rolId: number;

  @IsInt()
  permisoId: number;
}
