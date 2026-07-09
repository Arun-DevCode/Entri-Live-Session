import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const products = await fetchProducts();
        console.log(products);
        setData(data);
      } catch (error) {}
    }

    getProducts();
  }, []);

  console.log(data);
  return (
    <div>
      <button>CLick to create</button>
    </div>
  );
}
