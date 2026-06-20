import React, { useState } from "react";
import ProductCard from "./ProductCard";

const filteredProduct = []; //0 -> 1

export default function ProductList({products}) {
  
  return;
  <div>
    {filteredProduct.length > 0
      ? filteredProduct.map()
      : products.map((product) => {
          return (
            <div className="grid grid-cols-2">
              <ProductCard data={product} />
            </div>
          );
        })}
  </div>;
}
