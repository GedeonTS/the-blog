import { createSlice } from "@reduxjs/toolkit";
import { getPosts, postPosts } from "./postActions";

const initialState = {
  posts: [],
  isGettingPosts: false,
  isPostingPost: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      return { ...state, isGettingPosts: true, error: "" };
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      return { ...state, isGettingPosts: false, posts: payload };
    });
    builder.addCase(getPosts.rejected, (state, { payload }) => {
      return { ...state, isGettingPosts: false, error: payload };
    });

    builder.addCase(postPosts.pending, (state) => {
      return { ...state, isPostingPost: true };
    });
    builder.addCase(postPosts.fulfilled, (state, { payload }) => {
      return { ...state, isPostingPost: false, posts: payload };
    });
    builder.addCase(postPosts.rejected, (state, { payload }) => {
      return { ...state, isPostingPost: false, error: payload };
    });
  },
});

export default postsSlice.reducer;
