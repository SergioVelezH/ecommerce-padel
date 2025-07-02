import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
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
    skipDuplicates: true, // para no duplicar si llamás varias veces
  });

  return NextResponse.json({ message: "Seed products created" });
}
