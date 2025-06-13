import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VedioTitle = ({ movie }) => {
  const { id: movieId, overview, original_title } = movie || "";

  useMovieTrailer(movieId);

  const store = useSelector((state) => state?.newMovies?.Trailer);

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
