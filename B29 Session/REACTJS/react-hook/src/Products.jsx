import { useEffect, useState } from "react";

export default function Products() {
  const [message, setMessage] = useState("Hi Everyone");

  useEffect(() => {
    console.log("Use Effect ran!");
    setMessage("Thank for feedback");
  });

  console.log("Product Component is Mounted!");
  return (
    <div>
      <h1>Product page</h1>
    </div>
  );
}
