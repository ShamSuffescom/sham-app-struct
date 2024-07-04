import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("vendor/login", async (data, Thunk) => {
  try {
    let response = await axios.post("vendor/login", data);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});

export const register = createAsyncThunk(
  "vendor/register",
  async (data, Thunk) => {
    try {
      let response = await axios.post("vendor/signup", data);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

// export const socialLogin = createAsyncThunk(
//   "auth/socialLogin",
//   async (data, Thunk) => {
//     try {
//       let response = await axios.post("auth/socialite", data);
//       return response?.data;
//     } catch (error) {
//       return Thunk.rejectWithValue(error);
//     }
//   }
// );

export const logoutUser = createAsyncThunk(
  "vendor/logout",
  async (data, Thunk) => {
    try {
      let response = await axios.get("vendor/logout", data);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
