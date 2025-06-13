import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VedioTitle = ({ movie }) => {
  const { id: movieId, overview, original_title } = movie || "";

  useMovieTrailer(movieId);

  const store = useSelector((state) => state?.newMovies?.Trailer);

  return (
    <div className="vedio-trailer-container">
      <div className="iframe-sec">
        <iframe
          src={`https://www.youtube.com/embed/${store?.key}`}
          title="Movie trailer"
          className="iframeStyling"
        ></iframe>
        <div className="trailer-content">
          <h1>{original_title}</h1>
          <p>{overview}</p>
          <div className="trailer-buttons">
            <button className="trailer-btns">▶️ Play</button>
            <button className="trailer-btns">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedioTitle;
