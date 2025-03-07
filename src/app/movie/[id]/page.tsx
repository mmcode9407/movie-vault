import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";

import { MovieDetails } from "@/features/movie/components/movie-details";
import { homePath } from "@/paths";

export default function MovieDetailsPage() {
  return (
    <section className="w-full">
      <Link
        href={homePath()}
        className="inline-flex items-center mb-6 hover:underline underline-offset-4 gap-x-2">
        <LucideArrowLeft className="size-4" />
        Back to movies
      </Link>

      <MovieDetails />
    </section>
  );
}
