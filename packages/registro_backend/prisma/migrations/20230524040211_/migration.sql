/*
  Warnings:

  - A unique constraint covering the columns `[entradaId]` on the table `Salida` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `entradaId` to the `Salida` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `salida` ADD COLUMN `entradaId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Salida_entradaId_key` ON `Salida`(`entradaId`);

-- AddForeignKey
ALTER TABLE `Salida` ADD CONSTRAINT `Salida_entradaId_fkey` FOREIGN KEY (`entradaId`) REFERENCES `Entrada`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
