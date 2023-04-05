import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRepos = createAsyncThunk(
  "github/fetchRepos",
  async (user) => {
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    return response.data;
  }
);

const initialState = {
  loading: false,
  repos: null,
  error: "",
};

const reposSlice = createSlice({
  name: "github/fetchRepos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      state.loading = false;
      state.repos = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRepos.rejected, (state, action) => {
      state.loading = false;
      state.repos = null;
      state.error = action.error.message;
    });
  },
});

export default reposSlice.reducer;
