import { getGenres } from "@/api/movie/queries/get-genres";
import { Separator } from "@/components/ui/separator";

import { MovieGenreFilter } from "./movie-genre-filter";
import { MovieRatingFilter } from "./movie-rating-filter";

export const MovieFilters = async () => {
  const genres = await getGenres();

  return (
    <div className="w-full gap-y-6 flex flex-col">
      <MovieGenreFilter genres={genres || []} />

      <Separator />

      <MovieRatingFilter />
    </div>
  );
};
