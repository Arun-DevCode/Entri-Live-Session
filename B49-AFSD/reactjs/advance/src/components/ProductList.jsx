import React from "react";

export default function ProductList({ data }) {
  return (
    <>
      {data.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <>{product.rating.rate}</>
          </div>
        );
      })}
    </>
  );
}
