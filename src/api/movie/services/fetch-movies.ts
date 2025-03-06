"use server";

import type { ParsedSearchParams } from "@/features/movie/search-params";
import axiosClient from "@/lib/axios/axios-client";

import type { GetMoviesResponse } from "../types";

export const fetchMovies = async (searchParams: ParsedSearchParams) => {
  const { genre, ratingDir, ratingKey } = searchParams;

  return (
    await axiosClient.get<GetMoviesResponse>("/discover/movie", {
      params: {
        with_genres: genre,
        [`vote_average.${ratingDir}`]: ratingKey,
      },
    })
  ).data;
};
