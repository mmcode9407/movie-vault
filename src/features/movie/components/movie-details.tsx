﻿import {
  LucideCalendar,
  LucideClock,
  LucideGlobe,
  LucideStar,
} from "lucide-react";
import Image from "next/image";

import type { Cast, Crew, MovieDetailed } from "@/api/movie/types";
import { Badge } from "@/components/ui/badge";
import { MovieActors } from "@/features/movie/components/movie-actors";
import { getFullYear } from "@/utils/date";

type MovieCredits = {
  cast: Cast[];
  crew: Crew[];
};

type MovieDetailsProps = {
  movie: MovieDetailed;
  credits: MovieCredits;
};

export const MovieDetails = ({ movie, credits }: MovieDetailsProps) => {
  return (
    <div className="grid sm:grid-cols-[300px_1fr] gap-8">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={
            `https://image.tmdb.org/t/p/original/${movie.poster_path}` ||
            "/placeholder.png"
          }
          alt={movie.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div>
        <h2 className="text-3xl sm:text-4xl font-bold">{movie.title}</h2>

        <div className="flex flex-wrap items-center gap-4 mt-3">
          <div className="inline-flex items-center gap-x-1">
            <LucideStar className="size-5 fill-yellow-400 text-yellow-400" />

            <span className="font-medium">
              {movie.vote_average.toFixed(1)}/10
            </span>
          </div>

          <div className="inline-flex items-center gap-x-1">
            <LucideClock className="size-5 text-muted-foreground" />

            <span className="text-muted-foreground">{movie.runtime}</span>
          </div>

          <div className="inline-flex items-center gap-x-1">
            <LucideCalendar className="size-5 text-muted-foreground" />

            <span className="text-muted-foreground">
              {getFullYear(movie.release_date)}
            </span>
          </div>

          <div className="inline-flex items-center gap-x-1">
            <LucideGlobe className="size-5 text-muted-foreground" />

            <div className="flex items-center gap-x-0.5 text-muted-foreground">
              {movie.origin_country.map((country) => (
                <>
                  <span key={country}>{country}</span>

                  <span className="last:hidden">|</span>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {movie.genres.map((genre) => (
            <Badge key={genre.id} variant="secondary">
              {genre.name}
            </Badge>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Overview</h3>

          <p className="text-muted-foreground">{movie.overview}</p>
        </div>

        <MovieActors cast={credits.cast} />
      </div>
    </div>
  );
};
