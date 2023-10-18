import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSlidebar: true,
};

const slidebarSlice = createSlice({
  name: "slidebar",
  initialState,
  reducers: {
    toggleSlidebar: (state) => {
      state.showSlidebar = !state.showSlidebar;
    },
    controlSlidebar: (state, actions) => {
      state.showSlidebar = actions.payload;
    },
  },
});

export const { toggleSlidebar, controlSlidebar } = slidebarSlice.actions;

export default slidebarSlice.reducer;
