import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import answerService from "./answerService";

const initialState = {
  answers: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getAnswers = createAsyncThunk(
  "answers/get",
  async (_, thunkAPI) => {
    try {
      const { access: token } = thunkAPI.getState().auth.user;
      return await answerService.getAnswers(token);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const upvoteAnswer = createAsyncThunk(
  "answers/upvote",
  async (answerId, thunkAPI) => {
    try {
      const { access: token } = thunkAPI.getState().auth.user;
      const { question } = thunkAPI.getState().question;

      const answer = await answerService.upvote(answerId, token);
      const updatedAnswers = question.answers.map((ans) =>
        ans.id === answerId ? answer : ans
      );
      const updatedQuestion = { ...question, answers: updatedAnswers };

      return updatedQuestion.answers;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const answerSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnswers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnswers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.answers = action.payload;
      })
      .addCase(getAnswers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.answers = null;
      })
      .addCase(upvoteAnswer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.answers = action.payload;
      })
      .addCase(upvoteAnswer.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.answers = [...state];
      });
  },
});

export const { reset } = answerSlice.actions;
export default answerSlice.reducer;
