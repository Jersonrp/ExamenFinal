/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "genero" TEXT,
    "fecha_nacimiento" TIMESTAMP(3),
    "estado" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InformacionCliente" (
    "id" SERIAL NOT NULL,
    "tipo_informacion" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(3) NOT NULL,
    "usuario_creador" TEXT NOT NULL,
    "estado_informacion" TEXT,
    "clienteId" INTEGER,

    CONSTRAINT "InformacionCliente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InformacionCliente" ADD CONSTRAINT "InformacionCliente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
