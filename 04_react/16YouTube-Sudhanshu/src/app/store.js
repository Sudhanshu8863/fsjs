import { configureStore } from "@reduxjs/toolkit";
import slidebarSlice from "../features/slidebarSlice";
import searchSlice from "../features/searchSlice";

const store = configureStore({
  reducer: {
    slidebar: slidebarSlice,
    search: searchSlice,
  },
});

export default store;
