import { services } from "./services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ loginInfo, router }) => {
    try {
      const resp = await services.getLogin(loginInfo, router);
      return resp;
    } catch (error) { }
  }
);

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ signupInfo,router }) => {
    try {
      return await services.getRegistered(signupInfo,router);
    } catch (error) { }
  }
);

export const logoutUser = createAsyncThunk("logout/logoutUser", async () => {
  try {
    return await services.getLogout();
  } catch (error) { }
});

export const updateUser = createAsyncThunk("update/updateUser", async () => {
  try {
    return await services.getUpdate(userId, user);
  } catch (error) { }
});
