import { cache } from "react";

import type { ParsedSearchParams } from "@/features/movie/search-params";

import { fetchGenres } from "../services/fetch-genres";
import { fetchMovies } from "../services/fetch-movies";

export const getMovies = cache(async (searchParams: ParsedSearchParams) => {
  try {
    const [movieResp, genresResp] = await Promise.all([
      fetchMovies(searchParams),
      fetchGenres(),
    ]);

    const genreMap = new Map(
      genresResp.genres.map(({ id, name }) => [id, name]),
    );

    const mappedMovies = movieResp.results.map((movie) => ({
      ...movie,
      genre_names: movie.genre_ids.map((id) => genreMap.get(id) || "Unknown"),
    }));

    return {
      list: mappedMovies,
      metadata: {
        count: movieResp.total_results,
        hasNextPage: movieResp.page < movieResp.total_pages,
      },
    };
  } catch (error) {
    console.error("Error fetching movies", error);
    return {
      list: [],
      metadata: {
        count: 0,
        hasNextPage: false,
      },
    };
  }
});
