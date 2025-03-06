import { cache } from "react";

import { fetchGenres } from "../services/fetch-genres";
import { fetchMovies } from "../services/fetch-movies";

export const getMovies = cache(async (genre: string) => {
  try {
    const [movieResp, genresResp] = await Promise.all([
      fetchMovies(genre),
      fetchGenres(),
    ]);

    const genreMap = new Map(
      genresResp.genres.map(({ id, name }) => [id, name]),
    );

    const mappedMovies = movieResp.results.map((movie) => ({
      ...movie,
      genre_names: movie.genre_ids.map((id) => genreMap.get(id) || "Unknown"),
    }));

    return mappedMovies;
  } catch (error) {
    console.error("Error fetching movies", error);
    return [];
  }
});
