import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
  Trailer: null,
};

const moviesList = createSlice({
  name: "moviesList",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addTrailerMovie: (state, action) => {
      state.Trailer = action.payload;
    },
  },
});

export const { addMovies, addTrailerMovie } = moviesList.actions;
export default moviesList.reducer;
