import { createSlice } from "@reduxjs/toolkit";
import { postLike } from "./likesActions";
import { toast } from "react-toastify";

const initialState = {
  isPostingLike: false,
  likePosted: false,
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postLike.pending, (state) => {
      return { ...state, isPostingLike: true };
    });
    builder.addCase(postLike.fulfilled, (state) => {
      toast.success("Like successfuly added!");
      return { ...state, likePosted: true, isPostingLike: false };
    });
    builder.addCase(postLike.rejected, (state) => {
      toast.error("Couldn't add like!");
      return { ...state, isPostingLike: false };
    });
  },
});

export default likesSlice.reducer;
