-- CreateTable
CREATE TABLE "Lieferschein" (
    "id" SERIAL NOT NULL,
    "lieferant" TEXT NOT NULL,
    "torNummer" TEXT NOT NULL,
    "kennzeichen" TEXT NOT NULL,
    "fahrerName" TEXT NOT NULL,
    "gewicht" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lieferschein_pkey" PRIMARY KEY ("id")
);
