import { createSlice } from "@reduxjs/toolkit";
import { getUsers, postUser } from "./usersActions";
import { toast } from "react-toastify";

const initialState = {
  users: [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
  isGettingUser: false,
  isPostingUser: false,
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
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
      localStorage.setItem("currentUser", JSON.stringify(payload));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      return {
        ...state,
        isPostingUser: false,
        users: [payload, ...state.users],
        isAuthenticated: true,
      };
    });
    builder.addCase(postUser.rejected, (state, { payload }) => {
      toast.error("Email address already taken");
      return { ...state, isPostingUser: false, error: payload };
    });
  },
});

export default usersSlice.reducer;
