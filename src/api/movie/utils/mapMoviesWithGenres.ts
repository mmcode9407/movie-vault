import type { Genre, Movie } from "@/api/movie/types";

export const mapMoviesWithGenres = (movies: Movie[], genres: Genre[]) => {
  const genreMap = new Map(genres.map(({ id, name }) => [id, name]));

  return movies.map((movie) => ({
    ...movie,
    genre_names: movie.genre_ids.map((id) => genreMap.get(id) || "Unknown"),
  }));
};
