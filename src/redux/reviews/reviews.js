import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const BASE_URL = "https://67c22a7761d8935867e59169.mockapi.io/reviews";

export const fetchReviews = createAsyncThunk(
    "reviews/fetchReviews",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get(`${BASE_URL}`);
            console.log("Data from mockapi:", data);
            return data;
        } catch (error) {
            console.error("Error fetching reviews:", error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addReview = createAsyncThunk("reviews/addReview", async (body, thunkAPI) => {
    try {
        const { data } = await axios.post(`${BASE_URL}`, body);
        return data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return thunkAPI.rejectWithValue(error.message);
    }
})