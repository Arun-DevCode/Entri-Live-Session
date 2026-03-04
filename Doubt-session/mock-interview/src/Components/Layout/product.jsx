// ProductPage.js
import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import Sidebar from "../Sidebar";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Entire Product Data available

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleMultiFilter = (filter) => {
    // filter logic - Whole Data -> FilteredData
    const resultProducts = filteredProducts.filter(
      (product) =>
        product.category.toLowerCase() === filter.category.toLowerCase(),
    );

    console.log(resultProducts);
    // Gonna update state with filteredData(Array)
    setFilteredProducts(resultProducts);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Fixed Sidebar for Desktop */}
      <aside className="w-64 hidden md:block bg-white shadow-md sticky top-0 h-screen overflow-y-auto">
        <Sidebar setFiltered={handleMultiFilter} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
