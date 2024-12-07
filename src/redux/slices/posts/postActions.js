import { createAsyncThunk } from "@reduxjs/toolkit";
import API_URL from "../../../api/api";
import axios from "axios";

const POSTS_URL = `${API_URL}/posts`;

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

export const postPost = createAsyncThunk(
  "posts/postPost",
  async ({ post, post_sections }, { rejectWithValue }) => {
    try {
      const response = await axios.post(POSTS_URL, { post, post_sections });
      if (response.status !== 201) throw new Error("Couldn't post new post");
      return response.data.data.post;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPost = createAsyncThunk(
  "posts/getPost",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${POSTS_URL}/${id}`);
      if (response.status !== 200) throw new Error("Couldn't get post");
      return response.data.data.post;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
