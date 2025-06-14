import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addMovies } from "../utils/Slices/NewMoviesListSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((state) => state?.newMovies?.movies);

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
    // we only call this API if this state object does not have any data.
    !nowPlayingMovies && fetchMoviesData();
  }, []);
};

export default useNowPlayingMovies;
