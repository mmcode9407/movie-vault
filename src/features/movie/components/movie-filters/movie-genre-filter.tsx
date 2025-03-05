import { FilterChipButton } from "@/components/filters/filter-chip-button";
import { FilterSection } from "@/components/filters/filter-section";
import type { Genre } from "@/data/movie-data";

type MovieGenreFilterProps = {
  genres: Genre[];
};

export const MovieGenreFilter = ({ genres }: MovieGenreFilterProps) => {
  return (
    <FilterSection title="Genres">
      {genres.map((genre) => (
        <FilterChipButton key={genre} label={genre} isActive={false} />
      ))}
    </FilterSection>
  );
};
