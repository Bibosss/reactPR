import { createSlice } from "@reduxjs/toolkit";
import { addReview, fetchReviews } from "./reviews";

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchReviews.pending, (state) => {
            state.error = null;
            state.isLoading = true;
        })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.items = action.payload;
                state.error = null;
                state.isLoading = false
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false
            })
            .addCase(addReview.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addReview.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload);
            })
            .addCase(addReview.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
})

export const reviewsReducer = reviewsSlice.reducer;

export const selectItems = state => state.reviews.items;