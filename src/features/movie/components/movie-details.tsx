import {
  LucideCalendar,
  LucideClock,
  LucideGlobe,
  LucideStar,
} from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export const MovieDetails = () => {
  return (
    <div className="grid sm:grid-cols-[300px_1fr] gap-8">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/placeholder.png"
          alt="Movie title"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div>
        <h2 className="text-3xl sm:text-4xl font-bold">Rocky</h2>

        <div className="flex flex-wrap items-center gap-4 mt-3">
          <div className="inline-flex items-center gap-x-1">
            <LucideStar className="size-5 fill-yellow-400 text-yellow-400" />

            <span className="font-medium">8/10</span>
          </div>

          <div className="inline-flex items-center gap-x-1">
            <LucideClock className="size-5 text-muted-foreground" />

            <span className="text-muted-foreground">124 min</span>
          </div>

          <div className="inline-flex items-center gap-x-1">
            <LucideCalendar className="size-5 text-muted-foreground" />

            <span className="text-muted-foreground">2005</span>
          </div>

          <div className="inline-flex items-center gap-x-1">
            <LucideGlobe className="size-5 text-muted-foreground" />

            <span className="text-muted-foreground">USA</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="secondary">Action</Badge>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Overview</h3>

          <p className="text-muted-foreground">The best movie</p>
        </div>
      </div>
    </div>
  );
};
