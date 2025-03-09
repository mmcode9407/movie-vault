"use client";

import { useState } from "react";

import type { Cast } from "@/api/movie/types";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MovieActorItem } from "@/features/movie/components/movie-actor-item";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";

type MovieActorsProps = {
  cast: Cast[];
};

export const MovieActorList = ({ cast }: MovieActorsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLaptopScreen = useClientMediaQuery(
    "(min-width: 1024px) and (max-width: 1280px)",
  );

  const visibleActors = isLaptopScreen ? 3 : 4;

  return (
    <div className="mt-6 flex flex-col gap-y-4">
      <h2 className="text-xl font-semibold">Cast</h2>

      {cast.length ? (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex flex-col gap-y-4 items-center">
          <ul className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cast.slice(0, visibleActors).map((actor) => (
              <MovieActorItem key={actor.id} actor={actor} />
            ))}
          </ul>

          {cast.length > visibleActors && (
            <>
              <CollapsibleContent
                asChild
                className=" overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                <ul className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cast.slice(visibleActors).map((actor) => (
                    <MovieActorItem key={actor.id} actor={actor} />
                  ))}
                </ul>
              </CollapsibleContent>

              <CollapsibleTrigger asChild>
                <Button variant="outline">
                  {isOpen ? "Show less" : "Show more"}
                </Button>
              </CollapsibleTrigger>
            </>
          )}
        </Collapsible>
      ) : (
        <p>No cast found</p>
      )}
    </div>
  );
};
