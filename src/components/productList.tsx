'use client';
import { useEffect, useState } from 'react';
import ProductCard from './productCard';
import { Product } from '@/types/types';


export default function ProductList() {
   const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}