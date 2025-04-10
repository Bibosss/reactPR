import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProduces",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(url);
      return data;
      //   console.log(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchProduct = createAsyncThunk(
  "products/searchProduct",
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(url);
      const products = response.data;
      return products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
