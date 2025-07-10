import BuyButton from "@/components/buyButton";
import DescriptionButton from "@/components/descriptionButton";
import NavBar from "@/components/navBar";
import { prisma } from "@/lib/prisma";
import { ProductDetailProps } from "@/types/types";
import Link from "next/link";

export default async function ProductDetail({ params }: ProductDetailProps) {
  const id = Number(params.id);

  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <section className="w-full flex flex-col items-center justify-center text-black">
      <NavBar />
      <div className="w-[90%] flex items-center justify-start pt-4 gap-2">
        <Link href="/">
          <p className="text-xs">Home /</p>
        </Link>

        <p className="text-xs text-gray-400">{product.name}</p>
      </div>
      <div className="w-[90%] flex items-center justify-center pt-20 ">
        <img
          src={product?.image}
          alt={product?.name}
          className="w-[50%] h-[530px] object-contain"
        />
        <div className="w-[50%] flex flex-col items-start justify-center gap-6 p-4">
          <p className="text-4xl font-extrabold">{product?.name}</p>
          <p className="text-3xl font-bold">U$D{product?.price}</p>
          <p className="text-base text-gray-400">{product?.description}</p>
          <div className="w-full flex items-start justify-center gap-4">
            <BuyButton product={product} />
            <button className="w-[50%] h-[52px] border rounded-full bg-black text-white">
              Add to Cart
            </button>
          </div>
          <DescriptionButton description={product.description} />
        </div>
      </div>
    </section>
  );
}
