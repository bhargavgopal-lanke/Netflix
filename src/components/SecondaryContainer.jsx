import React from "react";

const SecondaryContainer = ({ movies }) => {
  console.log("https://image.tmdb.org/t/p/w500/", movies);

  return (
    <div>
      {movies &&
        movies.length > 0 &&
        movies.map((movies) => {
          return (
            <div key={movies?.id}>
              <div>
                <h4>{movies?.title}</h4>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movies?.poster_path}`}
                  alt={movies?.title}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SecondaryContainer;
