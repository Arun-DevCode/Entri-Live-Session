import React from "react";

export default function ProductCard({ data }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId) => {
    const cartProduct = {};
    setCart(cartProduct);
  };
  return (
    <div>
      <button onClick={() => handleAddToCart(data.id)}></button>
    </div>
  );
}
