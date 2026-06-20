import api from "../lib/axios.config";

//* Get All Product
export async function getAllProducts() {
  try {
    const res = await api.get("/products");
    if (res.status < 200) {
      throw new Error("Failed to fetch products!");
    }

    return res.data
  } catch (error) {
    console.error(error.message)
  }
}


export async function getProductByNameOrCategory(){
    try {
    const res = await api.get("/products");
    if (res.status < 200) {
      throw new Error("Failed to fetch products!");
    }

    return res.data
  } catch (error) {
    console.error(error.message)
  }
}