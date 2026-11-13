import { useContext } from "react";
import { ProductContext } from "../context/index";

export default function PaymentPage() {
  const product = useContext(ProductContext);

  //Print
  console.log(product);
  console.log("working..");
  return (
    <>
      <h1>Welcome to Cart Page</h1>
    </>
  );
}
