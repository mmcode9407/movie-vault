import { Separator } from "@/components/ui/separator";
import { genres } from "@/data/movie-data";

import { MovieGenreFilter } from "./movie-genre-filter";
import { MovieRatingFilter } from "./movie-rating-filter";

export const MovieFilters = () => {
  return (
    <div className="w-full md:w-1/4 gap-y-6 flex flex-col">
      <MovieGenreFilter genres={genres} />

      <Separator />

      <MovieRatingFilter />
    </div>
  );
};
