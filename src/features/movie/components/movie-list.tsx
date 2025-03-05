import { movieData } from "@/data/movie-data";

import { MovieItem } from "./movie-item";

export const MovieList = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {movieData.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
