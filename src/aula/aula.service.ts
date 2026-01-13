import { Injectable } from '@nestjs/common'
import { PrismaCarrerasService } from 'src/prisma/prisma-carreras.service'
import { CreateAulaDto } from './dto/create-aula.dto'
import { UpdateAulaDto } from './dto/update-aula.dto'

@Injectable()
export class AulaService {
  constructor(private prisma: PrismaCarrerasService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.aula.findMany({ skip, take })
  }

  findOne(id: number) {
    return this.prisma.aula.findUnique({
      where: { id_aula: id },
    })
  }

  create(createAulaDto: CreateAulaDto) {
    return this.prisma.aula.create({
      data: createAulaDto,
    })
  }

  update(id: number, updateAulaDto: UpdateAulaDto) {
    return this.prisma.aula.update({
      where: { id_aula: id },
      data: updateAulaDto,
    })
  }

  remove(id: number) {
    return this.prisma.aula.delete({
      where: { id_aula: id },
    })
  }
}
