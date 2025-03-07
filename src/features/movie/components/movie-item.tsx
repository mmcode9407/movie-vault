import { LucideStar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { MovieWithGenresNames } from "@/api/movie/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { moviePath } from "@/paths";
import { getFullYear } from "@/utils/date";

type MovieItemProps = {
  movie: MovieWithGenresNames;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <li key={movie.id}>
      <Link href={moviePath(movie.id.toString())}>
        <Card className="overflow-hidden h-full gap-2 py-0 group hover:scale-105 transition-transform duration-300">
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="object-cover w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={350}
              height={50}
              priority
            />

            <div className="absolute top-2 right-2 bg-primary/70 text-primary-foreground px-2 py-1 rounded-md flex items-center">
              <LucideStar className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />

              <span className="text-sm font-medium">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg line-clamp-1">
              {movie.title}
            </h3>

            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-400">
                {getFullYear(movie.release_date) || "N/A"}
              </span>

              <div className="flex gap-1">
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
