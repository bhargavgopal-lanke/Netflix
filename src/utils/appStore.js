import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";
import movieSlice from "./Slices/NewMoviesListSlice";
import searchSlice from "./Slices/SearchgptSlice";

const appStore = configureStore({
  reducer: {
    userReducer: userSlice,
    newMovies: movieSlice,
    searchGptPage: searchSlice,
  },
});

export default appStore;
