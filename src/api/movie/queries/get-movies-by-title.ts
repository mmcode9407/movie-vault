import { cache } from "react";

import { fetchMoviesByTitle } from "@/api/movie/services/fetch-movies-by-title";

import { fetchGenres } from "../services/fetch-genres";

export const getMoviesByTitle = cache(async (title: string) => {
  try {
    const [movieResp, genresResp] = await Promise.all([
      fetchMoviesByTitle(title),
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
