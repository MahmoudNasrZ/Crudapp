import { createSlice } from "@reduxjs/toolkit";

const authoritySlice = createSlice({
  name: "authorization",
  initialState: {
    isLoggedIn: false,
    userName: "MahmoudNasr",
    authorities: "Admin",
  },
  reducers: {
    logInAndOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
      console.log(state.isLoggedIn);
    },
  },
});
export default authoritySlice.reducer;
export const { logInAndOut } = authoritySlice.actions;
