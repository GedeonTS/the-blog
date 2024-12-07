import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../../api/api";

const COMMENTS_URL = (post_id) => `${API_URL}/posts/${post_id}/comments/`;

export const postComment = createAsyncThunk(
  "comments/postComment",
  async ({ comment, post_id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(COMMENTS_URL(post_id), { comment });
      console.log(COMMENTS_URL(post_id));
      if (response.status !== 201) throw new Error("Couldn't post comment");
      return response.data.data.comment;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
