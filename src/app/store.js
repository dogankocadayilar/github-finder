import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "../features/search/searchSlice";
import usersSliceReducer from "../features/users/usersSlice";
import themeSliceReducer from "../features/theme/themeSlice";
import reposSliceReducer from "../features/repos/reposSlice";

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    users: usersSliceReducer,
    repos: reposSliceReducer,
    theme: themeSliceReducer,
  },
});
