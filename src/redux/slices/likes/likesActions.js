import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../../api/api";

const LIKES_URL = (post_id) => `${API_URL}/posts/${post_id}/likes`;

export const postLike = createAsyncThunk(
  "likes/postLikes",
  async ({ user_id, post_id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(LIKES_URL(post_id), { user_id });
      if (response.status !== 201) throw new Error("Like not added");
      return response.data.data.like;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
