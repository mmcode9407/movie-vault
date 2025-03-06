import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";

import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { MovieFilters } from "@/features/movie/components/movie-filters/movie-filters";
import { MovieList } from "@/features/movie/components/movie-list";
import { MovieSearchInput } from "@/features/movie/components/movie-search-input";
import { searchParamsCache } from "@/features/movie/search-params";

type HomePageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  return (
    <>
      <div className="w-full md:w-1/4 gap-y-6 flex flex-col">
        <Heading title="Filters" />

        <MovieFilters />
      </div>

      <div className="w-full md:w-3/4 flex flex-col gap-6">
        <Heading title="Movies" description="Search for your favorite movies" />

        <MovieSearchInput placeholder="Search movies by title..." />

        <Suspense fallback={<Spinner />}>
          <MovieList
            searchParams={searchParamsCache.parse(await searchParams)}
          />
        </Suspense>
      </div>
    </>
  );
}
