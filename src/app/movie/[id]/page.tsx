import { LucideArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getMovieById } from "@/api/movie/queries/get-movie-by-id";
import { getMovieCredits } from "@/api/movie/queries/get-movie-credits";
import { MovieDetails } from "@/features/movie/components/movie-details";
import { homePath } from "@/paths";

type MovieDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: MovieDetailsPageProps): Promise<Metadata> => {
  const { id } = await params;
  const movie = await getMovieById(id);

  return {
    title: movie?.title || "Movie not found",
    description: movie?.overview || "",
  };
};

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProps) {
  const { id } = await params;
  const [movie, credits] = await Promise.all([
    getMovieById(id),
    getMovieCredits(id),
  ]);

  if (!movie) notFound();

  return (
    <section className="w-full">
      <Link
        href={homePath()}
        className="inline-flex items-center mb-6 hover:underline underline-offset-4 gap-x-2">
        <LucideArrowLeft className="size-4" />
        Back to movies
      </Link>

      <MovieDetails movie={movie} credits={credits} />
    </section>
  );
}
