import type { WithId } from "mongodb";


export type Dynamic< P = {}> = P & {
  params: Promise<{ name: string }>;
}

export type Product = {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

export type User = {
  user: number;
  name: string;
}

export type Cart = {
  user: number;
  products: string[];
}

export interface ProductListProps {
  products: WithId<Product>[];
}



