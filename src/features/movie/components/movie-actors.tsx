import Image from "next/image";

import type { Cast } from "@/api/movie/types";

type MovieActorsProps = {
  cast: Cast[];
};

export const MovieActors = ({ cast }: MovieActorsProps) => {
  return (
    <div className="mt-6 flex flex-col gap-y-4">
      <h2 className="text-xl font-semibold mb-2">Cast</h2>

      {cast.length ? (
        <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cast.map((c) => (
            <li key={c.name} className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-accent-foreground shrink-0">
                <Image
                  src={`https://image.tmdb.org/t/p/w45/${c.profile_path}`}
                  alt={c.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>

              <div>
                <p className="font-medium text-sm">{c.name}</p>

                <p className="text-xs text-muted-foreground">{c.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast yet</p>
      )}
    </div>
  );
};
