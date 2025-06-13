import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "../utils/Slices/NewMoviesList";

const VedioContainer = ({ movieId }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.newMovies?.Trailer);

  useEffect(() => {
    if (!movieId) return;

    const fetchMoviesImageUrl = async () => {
      const fetchData = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await fetchData.json();
      const results = await data?.results;
      const filterTrailer = results.filter(
        (filterMovie) => filterMovie.type === "Trailer"
      );
      const key = filterTrailer[0]?.key;
      dispatch(addTrailerMovie({ key: key }));
    };

    fetchMoviesImageUrl();
  }, [movieId, dispatch]);

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${store?.key}`}
        title="Movie trailer"
      ></iframe>
    </div>
  );
};

export default VedioContainer;
