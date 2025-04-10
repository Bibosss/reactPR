import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, searchProduct } from "./products";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const productsReducer = productsSlice.reducer;

export const selectProducts = (state) => state.products.items;
export const selectIsLoading = (state) => state.products.isLoading;
export const SelectError = (state) => state.products.error;
