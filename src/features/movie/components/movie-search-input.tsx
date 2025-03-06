"use client";

import { useQueryState } from "nuqs";

import { SearchInput } from "@/components/search-input";

import { searchParser } from "../search-params";

type TicketSearchInputProps = {
  placeholder: string;
};

export const MovieSearchInput = ({ placeholder }: TicketSearchInputProps) => {
  const [search, setSearch] = useQueryState("search", searchParser);

  return (
    <SearchInput
      placeholder={placeholder}
      value={search}
      onSearch={setSearch}
    />
  );
};
