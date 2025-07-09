import { Product } from "@/types/types";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-[295px] p-4 rounded  flex flex-col">
      <Link href={`/product/${product?.id}`}>
        <div className="w-full h-56 bg-[#F0EEED] rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full border-2 border-black-200 rounded-2xl object-contain "
          />
        </div>
      </Link>
      <h2 className="text-lg font-bold  mt-2">{product?.name}</h2>
      <p className="text-xl font-extrabold mt-2">$ {product?.price}</p>
    </div>
  );
}
