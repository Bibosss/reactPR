import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload;
        },
    },
});

export const { setResults } = searchSlice.actions;
export default searchSlice.reducer;