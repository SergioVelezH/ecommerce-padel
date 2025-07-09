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