import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/posts/postSlice";
import questionReducer from "../features/question/questionSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    question: questionReducer,
  },
});
