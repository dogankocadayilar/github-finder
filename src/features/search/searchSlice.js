import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "github/search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;
