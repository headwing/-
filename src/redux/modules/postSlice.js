// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  error: null,
};

export const __postPost = createAsyncThunk("postPost", async (payload) => {
  try {
    await axios.post("http://localhost:3001/posts", payload);
    console.log(payload);
  } catch (error) {
    console.log(error);
  }
});

export const __patchPost = createAsyncThunk("patchPost", async (payload) => {
  try {
    console.log(payload[0], payload[1]);
    await axios.put(`http://localhost:3001/posts/${payload[0]}`, payload[1]);
  } catch (error) {
    console.log(error);
  }
});

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/posts/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
