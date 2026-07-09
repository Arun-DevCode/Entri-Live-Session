import { useEffect, useState } from "react";

export default function Products() {
  const [message, setMessage] = useState("Hi Everyone");
  const [isProductDelivered, setIsProductDelivered] = useState(false);

  // After : Initial Render
  useEffect(() => {
    console.log("Use Effect ran!");
    setIsProductDelivered(true);
  }, []);

  console.log("Product Component is Mounted!");
  return (
    <div>
      <h1>Product page</h1>
      <p>
        Order status : {isProductDelivered && <span>Product is delivered</span>}
      </p>
    </div>
  );
}
