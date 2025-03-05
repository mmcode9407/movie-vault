import { Heading } from "@/components/heading";
import { MovieList } from "@/features/movie/components/movie-list";

export default function Home() {
  return (
    <>
      <div className="w-full md:w-1/4">Filters</div>

      <div className="w-full md:w-3/4 flex flex-col gap-6">
        <Heading title="Movies" description="Search for your favorite movies" />

        <MovieList />
      </div>
    </>
  );
}
