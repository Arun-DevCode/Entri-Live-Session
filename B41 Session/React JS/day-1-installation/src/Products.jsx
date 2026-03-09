// import React, { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 79.99,
    category: "electronics",
    stock: 45,
    rating: 4.5,
    createdAt: "2026-01-10T09:15:00Z",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 129.99,
    category: "electronics",
    stock: 30,
    rating: 4.3,
    createdAt: "2026-01-15T14:20:00Z",
  },
  {
    id: 3,
    title: "Men's Casual Cotton T-Shirt",
    price: 19.99,
    category: "men's clothing",
    stock: 120,
    rating: 4.2,
    createdAt: "2026-02-05T11:00:00Z",
  },
  {
    id: 4,
    title: "Women's Running Shoes",
    price: 59.99,
    category: "women's clothing",
    stock: 60,
    rating: 4.6,
    createdAt: "2026-02-12T08:45:00Z",
  },
  {
    id: 5,
    title: "Laptop Backpack",
    price: 49.99,
    category: "accessories",
    stock: 75,
    rating: 4.4,
    createdAt: "2026-02-20T16:30:00Z",
  },
  {
    id: 6,
    title: "Gaming Mouse",
    price: 39.99,
    category: "electronics",
    stock: 90,
    rating: 4.7,
    createdAt: "2026-03-01T12:10:00Z",
  },
];

// export default function Products() {
//   const [filteredProducts, setFilteredProducts] = useState();
//   const [date, setDate] = useState("");

//   // After mount : To get filtered based createdAt
//   // useEffect(() => {
//   //   const result = products.filter((product) => product.createdAt === date);
//   //   console.log(result);
//   // }, []);

//   console.log("User Date:", new Date(date).toDateString());

//   return (
//     <section
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         flexDirection: "column",
//         margin: "65px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           alignItems: "center",
//           padding: "12px",
//           background: "#f5f5f5",
//           borderRadius: "8px",
//           maxWidth: "500px",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search by city or event"
//           style={{
//             flex: 1,
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "6px",
//             outline: "none",
//             fontSize: "14px",
//           }}
//         />

//         <input
//           type="date"
//           style={{
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "6px",
//             outline: "none",
//             fontSize: "14px",
//             cursor: "pointer",
//           }}
//         />

//         <button
//           style={{
//             padding: "10px 16px",
//             background: "#2563eb",
//             color: "white",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             fontWeight: "500",
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <div
//         className="grid"
//         style={{
//           maxWidth: "365px",
//           display: "grid",
//           gridTemplateColumns: "300px 300px",
//           gap: "12px",
//         }}
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="card"
//             style={{
//               marginTop: "12px",
//               border: "1px solid black",
//               padding: "12px",
//             }}
//           >
//             <h3>{product.title}</h3>
//             <p>Category: {product.category}</p>
//             <p>Price: ${product.price}</p>
//             <p>Stock: {product.stock}</p>
//             <p>Rating: {product.rating}</p>
//             <p>Created: {new Date(product.createdAt).toLocaleDateString()}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const result = products.filter((product) => {
      const matchTitle = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchDate =
        date === "" ||
        new Date(product.createdAt).toISOString().split("T")[0] === date;

      return matchTitle && matchDate;
    });

    setFilteredProducts(result);
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "65px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          padding: "12px",
          background: "#f5f5f5",
          borderRadius: "8px",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          placeholder="Search event name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            padding: "10px 16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <div
        style={{
          maxWidth: "700px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}
      >
        {filteredProducts.length === 0 ? (
          <h3>No events found for selected date or event name</h3>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                marginTop: "12px",
                border: "1px solid black",
                padding: "12px",
              }}
            >
              <h3>{product.title}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <p>Rating: {product.rating}</p>
              <p>Created: {new Date(product.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}