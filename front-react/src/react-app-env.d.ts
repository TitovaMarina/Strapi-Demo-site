/// <reference types="react-scripts" />

type Products = {
  id: number;
  attributes: Product;
};

type Product = {
  name: string;
  description: string;
  price: number;
  image: any;
  category: string;
};


type Category = {
  id: number;
  name: string;
  description: string;
  products: string[];
};