import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "./thunk";

export const initialState = {
  user: {},
  error: "",
  isLoading: false,
  isError: false,
};

const loginSlice = createSlice({
  name: "Login",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.user = {};
        state.error = "";
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action?.payload?.data;
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = {};
        state.error = "";
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload.data;
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.user = {};
        state.error = "";
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload.data;
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default loginSlice.reducer;
