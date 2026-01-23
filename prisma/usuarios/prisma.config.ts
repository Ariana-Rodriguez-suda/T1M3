import 'dotenv/config'; 
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/usuarios/schema.prisma",
  datasource: {
    url: process.env.DATABASE_USUARIOS!,
  },
});
