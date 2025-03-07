"use server";

import axiosClient from "@/lib/axios/axios-client";

import type { GetMovieDetailedResponse } from "../types";

export const fetchMovieById = async (movieId: string) => {
  return (await axiosClient.get<GetMovieDetailedResponse>(`/movie/${movieId}`))
    .data;
};
