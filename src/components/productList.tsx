"use client";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { Product } from "@/types/types";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="w-full flex justify-center items-center text-black">
      <div className="w-[90%] grid grid-cols-2 md:grid-cols-5 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
