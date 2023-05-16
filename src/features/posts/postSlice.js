import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    return await postService.getPosts();
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const postSlice = createSlice({
  name: "posts",
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
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.posts = null;
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
