"use client";

import { useQueryStates } from "nuqs";

import type { SortSelectOption } from "@/components/sort-select";
import { SortSelect } from "@/components/sort-select";

import { sortOptions, sortParser } from "../search-params";

type MovieSortSelectProps = {
  options: SortSelectOption[];
};

export const MovieSortSelect = ({ options }: MovieSortSelectProps) => {
  const [sort, setSort] = useQueryStates(sortParser, sortOptions);

  return <SortSelect options={options} value={sort} onSelect={setSort} />;
};
