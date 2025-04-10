import { configureStore } from "@reduxjs/toolkit";
// import searchSlice from "./searchSlice";
import { reviewsReducer } from "./reviews/reviewsSlice";
import { productsReducer } from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    // search: searchSlice,
    reviews: reviewsReducer,
    products: productsReducer,
  },
});
