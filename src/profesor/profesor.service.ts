import { Injectable } from '@nestjs/common'
import { PrismaProfesorService } from 'src/prisma/prisma-profesor.service'
import { CreateProfesorDto } from './dto/create-profesor.dto'
import { UpdateProfesorDto } from './dto/update-profesor.dto'

@Injectable()
export class ProfesorService {
  constructor(private prisma: PrismaProfesorService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.profesor.findMany({ skip, take })
  }

  findOne(id: number) {
    return this.prisma.profesor.findUnique({
      where: { id_profesor: id },
    })
  }

  create(dto: CreateProfesorDto) {
    return this.prisma.profesor.create({
      data: {
        userId: dto.userId ?? null,
      }
    })
  }

  update(id: number, dto: UpdateProfesorDto) {
    return this.prisma.profesor.update({
      where: { id_profesor: id },
      data: dto,
    })
  }

  remove(id: number) {
    return this.prisma.profesor.delete({
      where: { id_profesor: id },
    })
  }
}
