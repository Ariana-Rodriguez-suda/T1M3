import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/usuarios';

@Injectable()
export class PrismaUsuariosService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
