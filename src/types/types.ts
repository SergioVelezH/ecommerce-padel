import NextAuth from "next-auth";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  createdAt: string; // O Date, dependiendo cómo lo manejes
}

export interface ProductDetailProps {
  params: { id: string };
}

export interface DescriptionButtonProps {
  description: string;  // O cualquier otro tipo que necesites
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
  }
}