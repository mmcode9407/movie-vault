import Image from "next/image";

import type { Cast } from "@/api/movie/types";

type MovieActorItem = {
  actor: Cast;
};

export const MovieActorItem = ({ actor }: MovieActorItem) => {
  const actorProfileImage = actor.profile_path
    ? `https://image.tmdb.org/t/p/w45/${actor.profile_path}`
    : "/avatar-placeholder.png";

  return (
    <li className="flex items-center gap-2">
      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-accent-foreground shrink-0">
        <Image
          src={actorProfileImage}
          alt={actor.name}
          fill
          className="object-cover"
          sizes="40px"
        />
      </div>

      <div>
        <p className="font-medium text-sm">{actor.name}</p>

        <p className="text-xs text-muted-foreground">{actor.character}</p>
      </div>
    </li>
  );
};
