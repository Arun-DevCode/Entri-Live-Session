import React from "react";
import ProductList from "../components/ProductList";
import FilterProduct from "../components/FilterProduct";
const products = [
  {
    id: 3,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    image: "headphones.jpg",
    description: "High-quality wireless headphones",
  },
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    image: "headphones.jpg",
    description: "High-quality wireless headphones",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    image: "headphones.jpg",
    description: "High-quality wireless headphones",
  },
];

export default function ProductPage() {
  return (
    <div className="flex">
      <FilterProduct />
      <ProductList products={products} />
    </div>
  );
}
