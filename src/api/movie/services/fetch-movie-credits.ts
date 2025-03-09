"use server";

import axiosClient from "@/lib/axios/axios-client";

import type { GetMovieCastResponse } from "../types";

export const fetchMovieCredits = async (movieId: string) => {
  return (
    await axiosClient.get<GetMovieCastResponse>(`/movie/${movieId}/credits`)
  ).data;
};
