// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import scoreSlice from "./scoreSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    score: scoreSlice,
  },
});

export default store;
