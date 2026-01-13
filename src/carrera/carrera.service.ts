import { Injectable } from '@nestjs/common'
import { PrismaCarrerasService } from 'src/prisma/prisma-carreras.service'
import { CreateCarreraDto } from './dto/create-carrera.dto'
import { UpdateCarreraDto } from './dto/update-carrera.dto'

@Injectable()
export class CarreraService {
  constructor(private prisma: PrismaCarrerasService) {}

  findAll(skip = 0, take = 10) {
    return this.prisma.carrera.findMany({ skip, take })
  }

  findOne(id: number) {
    return this.prisma.carrera.findUnique({
      where: { id_carrera: id },
    })
  }

  create(createCarreraDto: CreateCarreraDto) {
    return this.prisma.carrera.create({
      data: createCarreraDto,
    })
  }

  update(id: number, updateCarreraDto: UpdateCarreraDto) {
    return this.prisma.carrera.update({
      where: { id_carrera: id },
      data: updateCarreraDto,
    })
  }

  remove(id: number) {
    return this.prisma.carrera.delete({
      where: { id_carrera: id },
    })
  }
}
