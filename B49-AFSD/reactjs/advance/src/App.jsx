import { ProductProvider } from "./context";


// Import components
import CartPage from "./components/CartPage";
import PaymentPage from "./components/Payment";

export default function App() {
  return (
    <>
      <ProductProvider>
        <CartPage />
        <PaymentPage />
      </ProductProvider>
    </>
  );
}
