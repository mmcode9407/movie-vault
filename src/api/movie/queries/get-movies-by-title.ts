import { cache } from "react";

import { fetchMoviesByTitle } from "@/api/movie/services/fetch-movies-by-title";
import type { ParsedSearchParams } from "@/features/movie/search-params";

import { fetchGenres } from "../services/fetch-genres";

export const getMoviesByTitle = cache(
  async (searchParams: ParsedSearchParams) => {
    try {
      const [movieResp, genresResp] = await Promise.all([
        fetchMoviesByTitle(searchParams.search),
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
  },
);
