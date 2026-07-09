import api from "../lib/axios.config";

export const fetchProducts = async () => {
  try {
    const res = await api.get("/products");
    if (res.status > 200) {
      throw new Error("Failed to fetch data! Try again");
    }

    return res.data;
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
  }
};

export const handleCreateProduct = async () => {
  try {
    const res = await axios.delete(URL, {
      id: 20,
    });
  } catch (error) {}
};
