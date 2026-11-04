import React, { useEffect, useState } from "react";

function ProductPage() {
  const [movies, setMovies] = useState([]);

  // Render : After every render
  // Render : With Dependency - It render only once
  useEffect(() => {
    async function getAllUsers() {
      try {
        const res = await fetch(
          "https://www.omdbapi.com/?i=tt3896198&apikey=4fa0ad39",
          {
            method: "GET",
          },
        );
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllUsers();
  }, []);

  console.log("State", movies);
  return (
    <>
      <h3>Welcome to Product Page</h3>
    </>
  );
}

export default ProductPage;
