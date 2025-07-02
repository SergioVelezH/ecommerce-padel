const prisma = require("../src/lib/prisma").default;

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Paleta Padel Pro",
        price: 150.0,
        image: "/paleta-pro.png",
        stock: 10,
      },
      {
        name: "Paleta Padel Avanzada",
        price: 100.0,
        image: "/paleta-avanzada.png",
        stock: 20,
      },
      {
        name: "Paleta Padel Básica",
        price: 75.0,
        image: "/paleta-basica.png",
        stock: 15,
      },
    ],
  });

  console.log("Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
