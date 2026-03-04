import { useState, useMemo, memo } from "react";

// Sidebar.js
const Sidebar = ({ setFiltered }) => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [filter, setFilter] = useState({
    category: "",
    price: { min: 0, max: 0 },
    rating: 0,
  });
  const memo = useMemo();
  // Get filter value
  const handleInputChange = (e, value) => {
    setFilter((prev) => {
      return { ...prev, [e.target.name]: value };
    });
    setFiltered(filter);
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-lg font-bold border-b pb-2">Filters</h2>

      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
          Category
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat} className="flex items-center">
              <input
                type="checkbox"
                name="category"
                onChange={(e) => handleInputChange(e, cat)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm capitalize text-gray-700">
                {cat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
          Price
        </h3>
        <select className="w-full rounded-md border-gray-300 py-2 text-sm focus:border-blue-500 focus:ring-blue-500">
          <option>Min</option>
          <option value="0">$0</option>
          <option value="50">$50</option>
        </select>
        <div className="my-2 text-center text-gray-400">to</div>
        <select className="w-full rounded-md border-gray-300 py-2 text-sm focus:border-blue-500 focus:ring-blue-500">
          <option>Max</option>
          <option value="100">$100</option>
          <option value="500">$500+</option>
        </select>
      </div>

      {/* Ratings Filter */}
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
          Customer Ratings
        </h3>
        {[4, 3, 2].map((star) => (
          <label key={star} className="flex items-center mt-2 cursor-pointer">
            <input
              type="checkbox"
              name="rating"
              className="rounded text-blue-600"
              onChange={(e) => handleInputChange(e, star)}
            />
            <span className="ml-2 text-sm text-gray-700">{star}★ & above</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default memo(Sidebar);
