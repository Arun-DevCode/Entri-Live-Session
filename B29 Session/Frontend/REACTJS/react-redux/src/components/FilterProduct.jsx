import React from "react";

export default function FilterProduct() {
  const [filter, setFilter] = useState(null);
  return (
    <div>
      <select name="" id="" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
    </div>
  );
}
