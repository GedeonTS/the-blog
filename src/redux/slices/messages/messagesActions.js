import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../../api/api";

const MESSAGES_URL = `${API_URL}/messages`;

export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(MESSAGES_URL);

      if (response.status !== 200) throw new Error("Couldn't get messages");

      return response.data.data.messages;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postMessage = createAsyncThunk(
  "messages/postMessage",
  async ({ message }, { rejectWithValue }) => {
    try {
      const response = await axios.post(MESSAGES_URL, { message });

      if (response.status !== 201) throw new Error("Couldn't get messages");

      return response.data.data.message;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
