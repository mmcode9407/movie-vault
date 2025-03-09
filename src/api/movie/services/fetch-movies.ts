"use server";

import type { ParsedSearchParams } from "@/features/movie/search-params";
import axiosClient from "@/lib/axios/axios-client";

import type { GetMoviesResponse } from "../types";

export const fetchMovies = async (searchParams: ParsedSearchParams) => {
  const { search, genre, ratingDir, ratingKey, sortKey, sortValue, page } =
    searchParams;

  const params = {
    page,
    ...(search
      ? { query: search }
      : {
          with_genres: genre,
          [`vote_average.${ratingDir}`]: ratingKey,
          sort_by: `${sortKey}.${sortValue}`,
        }),
  };

  const url = search ? "/search/movie" : "/discover/movie";

  const response = await axiosClient.get<GetMoviesResponse>(url, { params });

  return response.data;
};
