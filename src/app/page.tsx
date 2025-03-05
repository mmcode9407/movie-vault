import { Heading } from "@/components/heading";
import { MovieFilters } from "@/features/movie/components/movie-filters/movie-filters";
import { MovieList } from "@/features/movie/components/movie-list";
import { MovieSearchInput } from "@/features/movie/components/movie-search-input";

export default function Home() {
  return (
    <>
      <MovieFilters />

      <div className="w-full md:w-3/4 flex flex-col gap-6">
        <Heading title="Movies" description="Search for your favorite movies" />

        <MovieSearchInput placeholder="Search movies by title..." />

        <MovieList />
      </div>
    </>
  );
}
