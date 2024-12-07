import { createSlice } from "@reduxjs/toolkit";
import { getPost, getPosts, postPost } from "./postActions";
import posts from "../../../mockingdata/images/posts";
import { toast } from "react-toastify";

const initialState = {
  posts: posts,
  isGettingPosts: false,
  isPostingPost: false,
  postPosted: false,
  currentPost: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetPostPosted: (state) => {
      return { ...state, postPosted: false };
    },
  },
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

    builder.addCase(postPost.pending, (state) => {
      return { ...state, isPostingPost: true };
    });
    builder.addCase(postPost.fulfilled, (state, { payload }) => {
      toast.success("post successfully created!");
      return {
        ...state,
        isPostingPost: false,
        posts: [payload, ...state.posts],
        postPosted: true,
      };
    });
    builder.addCase(postPost.rejected, (state, { payload }) => {
      toast.error("Couldn't create post");
      return { ...state, isPostingPost: false, error: payload };
    });
    builder.addCase(getPost.pending, (state) => {
      return { ...state, isGettingPosts: true, currentPost: {} };
    });
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      return { ...state, isGettingPosts: false, currentPost: payload };
    });
    builder.addCase(getPost.rejected, (state) => {
      return { ...state, isGettingPosts: false };
    });
  },
});

export const { resetPostPosted } = postsSlice.actions;

export default postsSlice.reducer;
