// ProductCard.js
const ProductCard = ({ product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg">
      <div className="aspect-h-1 aspect-w-1 bg-gray-200 group-hover:opacity-75 sm:h-64">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain object-center p-4"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <span className="text-xs font-medium uppercase tracking-widest text-indigo-600">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h3>
        <div className="flex flex-1 flex-col justify-end">
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center text-sm text-yellow-500">
              <span>★ {product.rating.rate}</span>
            </div>
          </div>
          <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
