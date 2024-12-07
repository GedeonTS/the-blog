import { createSlice } from "@reduxjs/toolkit";
import { postComment } from "./commentsActions";
import { toast } from "react-toastify";

const initialState = {
  isPostingComment: false,
  commentPosted: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    resetCommentPosted: (state) => {
      return { ...state, commentPosted: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postComment.pending, (state) => {
      return { ...state, isPostingComment: true };
    });
    builder.addCase(postComment.fulfilled, (state) => {
      toast.success("Comment successfuly added.");
      return { ...state, isPostingComment: false, commentPosted: true };
    });
    builder.addCase(postComment.rejected, (state) => {
      toast.error("Comment not posted");
      return { ...state, isPostingComment: false };
    });
  },
});

export const { resetCommentPosted } = commentsSlice.actions;

export default commentsSlice.reducer;
