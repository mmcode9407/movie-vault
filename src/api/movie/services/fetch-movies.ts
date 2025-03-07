"use server";

import type { ParsedSearchParams } from "@/features/movie/search-params";
import axiosClient from "@/lib/axios/axios-client";

import type { GetMoviesResponse } from "../types";

export const fetchMovies = async (searchParams: ParsedSearchParams) => {
  const { genre, ratingDir, ratingKey, sortKey, sortValue, page } =
    searchParams;

  return (
    await axiosClient.get<GetMoviesResponse>("/discover/movie", {
      params: {
        page,
        with_genres: genre,
        [`vote_average.${ratingDir}`]: ratingKey,
        sort_by: `${sortKey}.${sortValue}`,
      },
    })
  ).data;
};
