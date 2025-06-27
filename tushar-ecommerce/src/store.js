import { configureStore } from "@reduxjs/toolkit";
import { getProducts } from "./components/slice/productSlice";

const store = configureStore({
  reducer: {
    products: getProducts,
  },
});

export default store;
