import { LucideStar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { MovieWithGenresNames } from "@/api/movie/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { moviePath } from "@/paths";
import { getFullYear } from "@/utils/date";

type MovieItemProps = {
  movie: MovieWithGenresNames;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  const moviePosterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : "/placeholder.png";

  const movieRating = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : "No ratings yet";

  const movieReleaseYear = getFullYear(movie.release_date) || "N/A";

  return (
    <li key={movie.id}>
      <Link href={moviePath(movie.id.toString())}>
        <Card className="overflow-hidden h-full gap-y-2 py-0 group hover:scale-105 transition-transform duration-300">
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src={moviePosterUrl}
              alt={movie.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />

            <div className="absolute top-2 right-2 bg-primary/70 text-primary-foreground px-2 py-1 rounded-md flex items-center">
              <LucideStar className="size-3 fill-yellow-400 text-yellow-400 mr-1" />

              <span className="text-sm font-medium">{movieRating}</span>
            </div>
          </div>

          <CardHeader>
            <CardTitle className="text-lg line-clamp-2">
              {movie.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="pb-4 mt-auto">
            <div className="flex justify-between gap-x-2">
              <span className="text-gray-400">{movieReleaseYear}</span>

              <div className="flex gap-1 ">
                {movie.genre_names.slice(0, 2).map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
};
