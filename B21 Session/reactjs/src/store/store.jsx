import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/Product";

export const store = configureStore({
  reducer: {
    Product: ProductSlice,
  },
});
