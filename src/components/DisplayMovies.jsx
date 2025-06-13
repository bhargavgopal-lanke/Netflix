import React from "react";

const DisplayMovies = ({ movies }) => {

  return (
    <div>
      {movies &&
        movies.length > 0 &&
        movies.map((movies) => {
          return (
            <div key={movies.id}>
              <div>
                {/* <h4>{movies.title}</h4> */}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DisplayMovies;
