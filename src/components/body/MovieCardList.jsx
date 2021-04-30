import React from "react";
import MovieCard from "./MovieCard";

function MovieCardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  return (
    <div>
      {data.map((item) => (
        <MovieCard key={item.imdbID} movie={item} />
      ))}
    </div>
  );
}

export default MovieCardList;
