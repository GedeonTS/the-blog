import { createAsyncThunk } from "@reduxjs/toolkit";
import API_URL from "../../../api/api";
import axios from "axios";

const POSTS_URL = `${API_URL}`;

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(POSTS_URL);
      if (response.status !== 200) throw new Error("Couldn't get posts");
      return response.data.data.posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postPosts = createAsyncThunk(
  "posts/postPosts",
  async ({ post }, { rejectWithValue }) => {
    try {
      const response = await axios.post(POSTS_URL, { post });
      if (response.status !== 201) throw new Error("Couldn't post new post");
      return response.data.data.post;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
