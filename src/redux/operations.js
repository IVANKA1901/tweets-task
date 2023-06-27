import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://649b2215bf7c145d023a0d13.mockapi.io";

export const fetchUsers = createAsyncThunk("users/get", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/users");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const putUser = createAsyncThunk(
  "users/put",
  async ({ id, followers }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/users/${id}`, { followers });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
