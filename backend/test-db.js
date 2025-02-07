const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.lieferschein.create({
        data: {
            lieferant: "DHL",
            torNummer: "5A",
            kennzeichen: "AB-1234",
            fahrerName: "Max Mustermann",
            gewicht: 1250.5
        }
    });

    const lieferscheine = await prisma.lieferschein.findMany();
    console.log(lieferscheine);
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
