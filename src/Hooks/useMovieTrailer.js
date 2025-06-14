import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/utils";
import { addTrailerMovie } from "../utils/Slices/NewMoviesListSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((state) => state?.newMovies?.Trailer);

  useEffect(() => {
    if (!movieId) return;
    const fetchMoviesImageUrl = async () => {
      const fetchData = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await fetchData.json();
      const results = await data?.results;
      const filterTrailer =
        results &&
        results.filter((filterMovie) => filterMovie.type === "Trailer");
      const key = filterTrailer[0];
      dispatch(addTrailerMovie(key));
    };
    !movieTrailer && fetchMoviesImageUrl();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
