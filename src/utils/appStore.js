import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";
import movieSlice from "./Slices/NewMoviesList";

const appStore = configureStore({
  reducer: {
    userReducer: userSlice,
    newMovies: movieSlice,
  },
});

export default appStore;
