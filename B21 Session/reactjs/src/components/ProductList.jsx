import { useSelector } from "react-redux";

function ProductList() {
  const products = useSelector((state) => state.Product.products);

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="text-gray-500">
          <div className="animate-pulse">Loading products...</div>
        </div>
      </div>
    );
  }
  console.log(products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products[0]?.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {product.image && (
            <div className="aspect-w-1 aspect-h-1 bg-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="p-4">
            {product.description && (
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
            )}

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-blue-600">
                ${product.price}
              </span>

              {product.category && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {product.category}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
