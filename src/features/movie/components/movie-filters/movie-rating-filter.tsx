import { FilterChipButton } from "@/components/filters/filter-chip-button";
import { FilterSection } from "@/components/filters/filter-section";

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
  return (
    <FilterSection title="Ratings">
      {ratings.map((rating) => (
        <FilterChipButton
          key={rating.label}
          label={rating.label}
          isActive={false}
        />
      ))}
    </FilterSection>
  );
};
