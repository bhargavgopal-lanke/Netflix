import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "../utils/Slices/NewMoviesList";

const VedioTitle = ({ movie }) => {
  const { id: movieId, overview, original_title } = movie || "";

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
      const filterTrailer =
        results &&
        results.filter((filterMovie) => filterMovie.type === "Trailer");
      const key = filterTrailer[0];
      dispatch(addTrailerMovie(key));
    };
    fetchMoviesImageUrl();
  }, [movieId, dispatch]);

  return (
    <div>
      <div className="iframe-sec">
        <iframe
          src={`https://www.youtube.com/embed/${store?.key}`}
          title="Movie trailer"
          width="100%"
          height="600px"
          className="iframeStyling"
        ></iframe>
      </div>
      <div className="trailer-content">
        <h1>{original_title}</h1>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default VedioTitle;
