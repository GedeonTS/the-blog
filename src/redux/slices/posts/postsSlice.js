import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const postsSlice = createSlice({ name: "posts", initialState });

export default postsSlice.reducer;
