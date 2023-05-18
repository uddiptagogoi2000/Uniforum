import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import answerReducer from "../features/answers/answerSlice";
import questionReducer from "../features/question/questionSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    answers: answerReducer,
    question: questionReducer,
  },
});
