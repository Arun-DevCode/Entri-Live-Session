import useFetch from "../hooks/useFetch";
import ProductList from "../components/ProductList";
import { Suspense } from "react";
import Loader from "../components/spinner/loader";
import { ErrorBoundary } from "react-error-boundary";
import ProductError from "../components/error/ProductError";

export default function ProductPage() {
  // To get Product Data
  const API_URL = "https://fakestoreapi.com/products";
  const products = useFetch(API_URL);

  console.table(products);

  return (
    <>
      <h1>Welcome to Products Page</h1>

      {/* Product List */}
      <ErrorBoundary fallback={<ProductError />}>
        <Suspense fallback={<Loader />}>
          <ProductList data={products} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}