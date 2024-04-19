import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../services/user.service";

export const addUser = createAsyncThunk(
  "users/addUser",
  async (data, thunkAPI) => {
    try {
      const response = await registerUser(data);
      return response.data;
    } catch (error) {
      console.error("Error creating user  as ---> ", error);
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const loginUsers = createAsyncThunk(
  "users/loginUsers",
  async (data, thunkAPI) => {
    try {
      const response = await loginUser(data);
      console.log(response, "login wala");
      return response.data;
    } catch (error) {
      console.error("Error logging in user  as ---> ", error);
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
