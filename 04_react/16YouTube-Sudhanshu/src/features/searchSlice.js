import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchFor: "",
};

const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchFor: (state, action) => {
      state.searchFor = action.payload;
    },
  },
});

export const { setSearchFor } = search.actions;

export default search.reducer;
