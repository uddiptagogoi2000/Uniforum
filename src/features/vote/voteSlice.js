import {
  createSlice,
  createAsyncThunk,
  isAsyncThunkAction,
} from "@reduxjs/toolkit";

import voteService from "./voteService";

const initialState = {
  vote: { upvote: [], downvote: [] },
  isPending: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const upvote = createAsyncThunk(
  "vote/upvote",
  async (answerId, thunkAPI) => {
    try {
      const { access: token } = thunkAPI.getState().auth.user;
      const res = await voteService.upvote(answerId, token);
      console.log(res);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

export const downvote = createAsyncThunk(
  "vote/downvote",
  async (answerId, thunkAPI) => {
    try {
      const { access: token } = thunkAPI.getState().auth.user;
      const res = await voteService.downvote(answerId, token);
      console.log(res);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

export const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(upvote.fulfilled, (state, action) => {});
  },
});

export default voteSlice.reducer;
