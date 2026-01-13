-- CreateTable
CREATE TABLE "Carrera" (
    "id_carrera" SERIAL NOT NULL,
    "nombre_carrera" VARCHAR(150) NOT NULL,
    "duracion_anos" INTEGER NOT NULL,

    CONSTRAINT "Carrera_pkey" PRIMARY KEY ("id_carrera")
);

-- CreateTable
CREATE TABLE "Aula" (
    "id_aula" SERIAL NOT NULL,
    "nombre_aula" VARCHAR(50) NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "ubicacion" VARCHAR(100),

    CONSTRAINT "Aula_pkey" PRIMARY KEY ("id_aula")
);

-- CreateTable
CREATE TABLE "Materia" (
    "id_materia" SERIAL NOT NULL,
    "nombre_materia" VARCHAR(150) NOT NULL,
    "id_carrera" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "periodoId" INTEGER,
    "id_inscripcion" INTEGER,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id_materia")
);

-- CreateTable
CREATE TABLE "Periodo" (
    "id_periodo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Periodo_pkey" PRIMARY KEY ("id_periodo")
);

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_periodoId_fkey" FOREIGN KEY ("periodoId") REFERENCES "Periodo"("id_periodo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_id_carrera_fkey" FOREIGN KEY ("id_carrera") REFERENCES "Carrera"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "Aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;
