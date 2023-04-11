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
  preloadedState: loadState(),
});

store.subscribe((listener) => {
  const { users, theme } = store.getState();
  saveState({ users, theme });
});

function saveState(state) {
  try {
    let serializedState = JSON.stringify(state);
    localStorage.setItem("github-finder:state", serializedState);
  } catch (err) {}
}

function loadState() {
  try {
    let serializedState = localStorage.getItem("github-finder:state") || {};

    return JSON.parse(serializedState);
  } catch (err) {}
}
