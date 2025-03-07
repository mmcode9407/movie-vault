import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";

import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { MovieFilters } from "@/features/movie/components/movie-filters/movie-filters";
import { MovieList } from "@/features/movie/components/movie-list";
import { MovieSearchInput } from "@/features/movie/components/movie-search-input";
import { MovieSortSelect } from "@/features/movie/components/movie-sort-select";
import { MOVIE_SORT_OPTIONS } from "@/features/movie/constants";
import { searchParamsCache } from "@/features/movie/search-params";
import { cn } from "@/lib/utils";

type HomePageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const awaitedSearchParams = await searchParams;
  const parsedSearchParams = searchParamsCache.parse(awaitedSearchParams);

  const isSearchedByTitle = parsedSearchParams.search;

  return (
    <>
      {!isSearchedByTitle && (
        <aside className="w-full md:w-1/4 gap-y-6 flex flex-col">
          <Heading title="Filters" />

          <MovieFilters />
        </aside>
      )}

      <section
        className={cn("w-full flex flex-col gap-6", {
          "md:w-3/4": !isSearchedByTitle,
        })}>
        <Heading title="Movies" description="Search for your favorite movies" />

        <div className="flex flex-col sm:flex-row gap-4">
          <MovieSearchInput placeholder="Search movies by title..." />

          {!isSearchedByTitle && (
            <MovieSortSelect options={MOVIE_SORT_OPTIONS} />
          )}
        </div>

        <Suspense
          key={JSON.stringify(awaitedSearchParams)}
          fallback={<Spinner />}>
          <MovieList searchParams={parsedSearchParams} />
        </Suspense>
      </section>
    </>
  );
}
