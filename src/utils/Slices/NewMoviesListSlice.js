import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
  Trailer: null,
  popularMovies: null,
  trendingMovies: null,
  upcomingMovies: null,
  horrorMovies: null,
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
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
  },
});

export const {
  addMovies,
  addTrailerMovie,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
  addHorrorMovies,
} = moviesList.actions;
export default moviesList.reducer;
