// GET : To get all products
async function getAllProduct() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Data conversion
    const products = await response.json(); // JSON -> Object
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    return null;
  }
}

export { getAllProduct };
