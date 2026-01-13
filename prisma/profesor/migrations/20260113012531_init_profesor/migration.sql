-- CreateTable
CREATE TABLE "Profesor" (
    "id_profesor" SERIAL NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Profesor_pkey" PRIMARY KEY ("id_profesor")
);

-- CreateTable
CREATE TABLE "Titulo" (
    "id_titulo" SERIAL NOT NULL,
    "id_profesor" INTEGER NOT NULL,
    "nombre_titulo" VARCHAR(150) NOT NULL,
    "institucion" VARCHAR(150) NOT NULL,
    "ano_obtencion" INTEGER NOT NULL,

    CONSTRAINT "Titulo_pkey" PRIMARY KEY ("id_titulo")
);

-- AddForeignKey
ALTER TABLE "Titulo" ADD CONSTRAINT "Titulo_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "Profesor"("id_profesor") ON DELETE RESTRICT ON UPDATE CASCADE;
