import { Product } from "@/types/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-green-600">${product.price}</p>
    </div>
  );
}