import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import { reviewsReducer } from "./reviews/reviewsSlice";

export const store = configureStore({
    reducer: {
        search: searchSlice,
        reviews: reviewsReducer,
    }
})