import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/posts/postSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
});
