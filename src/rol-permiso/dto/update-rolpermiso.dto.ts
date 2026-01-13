import { PartialType } from '@nestjs/mapped-types';
import { CreateRolpermisoDto } from './create-rolpermiso.dto';

export class UpdateRolpermisoDto extends PartialType(CreateRolpermisoDto) {}
