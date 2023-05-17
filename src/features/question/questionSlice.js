import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import questionService from "./questionService";

const initialState = {
  question: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getQuestion = createAsyncThunk(
  "question/get",
  async (slug, thunkAPI) => {
    try {
      const { access: token } = thunkAPI.getState().auth.user;
      return await questionService.getQuestion(slug, token);
    } catch (error) {
      console.log(error);
    }
  }
);

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.question = action.payload;
      })
      .addCase(getQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.question = {};
      });
  },
});

export default questionSlice.reducer;
