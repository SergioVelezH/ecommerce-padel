import Header from "@/components/header";
import NavBar from "@/components/navBar";
import ProductList from "@/components/productList";
import React from "react";

// async function getProducts() {
//   const res = await fetch("http://localhost:3000/api/products");
//   if (!res.ok) throw new Error("Error al cargar productos");
//   return res.json();
// }

export default async function Home() {
  // const products = await getProducts();

  return (
    <main >
      <NavBar />
      <Header/>
      <ProductList/>
    </main>
  );
}
