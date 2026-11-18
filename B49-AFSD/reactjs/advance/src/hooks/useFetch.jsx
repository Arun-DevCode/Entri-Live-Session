import { use } from "react";

const cache = new Map();

export default function useFetch(url) {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      }),
    );
  }
  console.log(cache.get("https://fakestoreapi.com/products"))
  return use(cache.get(url));
}
