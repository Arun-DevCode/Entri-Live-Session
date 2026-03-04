import { useEffect } from "react";
import { getAllProduct } from "../api/product";
import { addProducts } from "../store/slices/Product";
import { useDispatch } from "react-redux";
import ProductList from "../components/ProductList";

function ProductPage() {
  const dispatch = useDispatch();
  // GET : API to get all product
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProduct();
        console.log(products);

        dispatch(addProducts(products));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        <ProductList />
      </div>
    </div>
  );
}

export default ProductPage;
