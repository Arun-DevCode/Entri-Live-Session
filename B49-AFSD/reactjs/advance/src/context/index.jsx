import { createContext } from "react";
import useFetch from "../hooks/useFetch";

// Create Context
export const ProductContext = createContext([]);

// Provider
export function ProductProvider(props) {
  //* to get all photos
  const albums = useFetch("https://jsonplaceholder.typicode.com/photos");
  console.table(albums);

  return (
    <ProductContext.Provider value={albums}>
      {/* Childrens */}
      {props.children}
    </ProductContext.Provider>
  );
}
