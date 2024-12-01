import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users/usersSlice";
import postsReducer from "./slices/posts/postsSlice";
import commentsReducer from "./slices/comments/commentsSlice";
import likesReducer from "./slices/likes/likesSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    likes: likesReducer,
    comments: commentsReducer,
  },
});

export default store;
