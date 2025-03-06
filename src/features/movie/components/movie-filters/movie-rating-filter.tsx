"use client";

import { useQueryStates } from "nuqs";

import { FilterChipButton } from "@/components/filters/filter-chip-button";
import { FilterSection } from "@/components/filters/filter-section";
import { ratingOptions, ratingParser } from "@/features/movie/search-params";

type Rating = {
  label: string;
  value: number;
  dir: "gte" | "lte";
};

const ratings: Rating[] = [
  { label: "0-5", value: 5, dir: "lte" },
  { label: "5+", value: 5, dir: "gte" },
  { label: "6+", value: 6, dir: "gte" },
  { label: "7+", value: 7, dir: "gte" },
  { label: "8+", value: 8, dir: "gte" },
  { label: "9+", value: 9, dir: "gte" },
  { label: "10", value: 10, dir: "gte" },
];

export const MovieRatingFilter = () => {
  const [ratingFilter, setRatingFilter] = useQueryStates(
    ratingParser,
    ratingOptions,
  );

  const handleRatingClick = ({ value, dir }: Rating) => {
    if (value === ratingFilter.ratingKey && dir === ratingFilter.ratingDir) {
      setRatingFilter({ ratingKey: null, ratingDir: null });
    } else {
      setRatingFilter({ ratingKey: value, ratingDir: dir });
    }
  };

  return (
    <FilterSection title="Ratings">
      {ratings.map((rating) => (
        <FilterChipButton
          key={rating.label}
          label={rating.label}
          isActive={
            rating.value === ratingFilter.ratingKey &&
            rating.dir === ratingFilter.ratingDir
          }
          onClick={() => handleRatingClick(rating)}
        />
      ))}
    </FilterSection>
  );
};
