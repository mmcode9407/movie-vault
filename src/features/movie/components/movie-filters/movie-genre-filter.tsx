"use client";

import { useQueryState } from "nuqs";

import type { Genre } from "@/api/movie/types";
import { FilterChipButton } from "@/components/filters/filter-chip-button";
import { FilterSection } from "@/components/filters/filter-section";
import { genreParser } from "@/features/movie/search-params";

type MovieGenreFilterProps = {
  genres: Genre[];
};

export const MovieGenreFilter = ({ genres }: MovieGenreFilterProps) => {
  const [genreFilter, setGenreFilter] = useQueryState("genre", genreParser);

  const handleGenreClick = (genreId: string) => {
    setGenreFilter(genreFilter !== genreId ? genreId : null);
  };

  return (
    <FilterSection title="Genres">
      {genres.length > 0 ? (
        genres.map((genre) => {
          const isActive = genre.id.toString() === genreFilter;

          return (
            <FilterChipButton
              key={genre.id}
              label={genre.name}
              isActive={isActive}
              onClick={() => handleGenreClick(genre.id.toString())}
            />
          );
        })
      ) : (
        <p>No genres found</p>
      )}
    </FilterSection>
  );
};
