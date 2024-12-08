import { createSlice } from "@reduxjs/toolkit";
import { getUsers, postUser } from "./usersActions";

const initialState = {
  users: [],
  currentUser: { id: 2 },
  isGettingUser: false,
  isPostingUser: false,
  isAuthenticated: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      return { ...state, isGettingUser: true };
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      return { ...state, isGettingUser: false, users: payload };
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      return { ...state, isGettingUser: false, error: payload };
    });
    builder.addCase(postUser.pending, (state) => {
      return { ...state, isPostingUser: true };
    });
    builder.addCase(postUser.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isPostingUser: false,
        users: [payload, ...state.users],
        isAuthenticated: true,
      };
    });
    builder.addCase(postUser.rejected, (state, { payload }) => {
      return { ...state, isPostingUser: false, error: payload };
    });
  },
});

export default usersSlice.reducer;
