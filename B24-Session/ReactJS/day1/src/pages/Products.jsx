import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);

  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data) {
          console.log("failed to fetch data");
        }
        setProducts(data);
      });
  };

  useEffect(() => {
    getAllProducts();
  },[update]);

  console.log(update);

  return (
    <section className="p-6">
      <div className="flex flex-col space-y-2.5 justify-between items-center mb-6">
        <button
          onClick={getAllProducts}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Products
        </button>
        <button
          onClick={() => setUpdate(!update)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Trigger
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((product) => {
          return (
            <div
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              key={product.id}
            >
              <div className="h-64 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-4 flex flex-col grow">
                <h2 className="text-lg font-semibold mb-2 line-clamp-2 min-h-14">
                  {product.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2 grow">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm text-gray-600">
                      {product.rating?.rate} ({product.rating?.count})
                    </span>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
