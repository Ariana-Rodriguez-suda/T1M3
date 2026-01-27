import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { join } from 'path';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
const { PrismaClient } = require(join(process.cwd(), 'prisma', 'generated', 'profesor'));

@Injectable()
export class PrismaProfesorService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_PROFESOR });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
