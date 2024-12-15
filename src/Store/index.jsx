import { configureStore } from "@reduxjs/toolkit";
import posts from "./postSlice";
import authorization from "./authoritySlice";
const store = configureStore({
  reducer: { posts, authorization },
});
export default store;
