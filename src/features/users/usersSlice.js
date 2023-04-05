import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "github/fetchUsers",
  async (user) => {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    return response.data;
  }
);

const initialState = {
  loading: false,
  user: null,
  error: "",
};

const usersSlice = createSlice({
  name: "github/fetchUsers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
