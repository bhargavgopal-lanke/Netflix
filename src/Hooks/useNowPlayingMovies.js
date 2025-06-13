import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addMovies } from "../utils/Slices/NewMoviesList";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  function fetchMoviesData() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(addMovies(res?.results));
      })
      .catch((error) => {
        console.log(error.code + ":" + error.message);
      });
  }

  useEffect(() => {
    fetchMoviesData();
  }, []);
};

export default useNowPlayingMovies;
