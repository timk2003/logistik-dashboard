/*
  Warnings:

  - The primary key for the `Lieferschein` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gewicht` on the `Lieferschein` table. All the data in the column will be lost.
  - You are about to drop the column `kennzeichen` on the `Lieferschein` table. All the data in the column will be lost.
  - You are about to drop the column `lieferant` on the `Lieferschein` table. All the data in the column will be lost.
  - You are about to drop the column `torNummer` on the `Lieferschein` table. All the data in the column will be lost.
  - Added the required column `ausgang` to the `Lieferschein` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eingang` to the `Lieferschein` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kfzKennzeichen` to the `Lieferschein` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lfdNr` to the `Lieferschein` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lieferschein" DROP CONSTRAINT "Lieferschein_pkey",
DROP COLUMN "gewicht",
DROP COLUMN "kennzeichen",
DROP COLUMN "lieferant",
DROP COLUMN "torNummer",
ADD COLUMN     "ausgang" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
ADD COLUMN     "bemerkung" TEXT,
ADD COLUMN     "bin" TEXT,
ADD COLUMN     "container" TEXT,
ADD COLUMN     "eingang" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
ADD COLUMN     "kfzKennzeichen" TEXT NOT NULL DEFAULT 'UNBEKANNT',
ADD COLUMN     "ladung" TEXT,
ADD COLUMN     "lfdNr" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Lieferschein_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Lieferschein_id_seq";

