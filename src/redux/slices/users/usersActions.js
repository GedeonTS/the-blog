import { createAsyncThunk } from "@reduxjs/toolkit";
import API_URL from "../../../api/api";
import axios from "axios";

const USERS_URL = `${API_URL}/users`;

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(USERS_URL);
      if (response.status !== 200) throw new Error("Couldn't get users");
      console.log(response);
      return response.data.data.users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postUser = createAsyncThunk(
  "users/postUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(USERS_URL);
      if (response.status !== 201) throw new Error("Couldn't post user");
      console.log(response);
      return response.data.data.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
