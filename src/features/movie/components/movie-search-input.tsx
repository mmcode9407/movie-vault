"use client";
import { useState } from "react";

import { SearchInput } from "@/components/search-input";

type TicketSearchInputProps = {
  placeholder: string;
};

export const MovieSearchInput = ({ placeholder }: TicketSearchInputProps) => {
  const [search, setSearch] = useState("");

  console.log("Search", search);

  return (
    <SearchInput
      placeholder={placeholder}
      value={search}
      onChange={setSearch}
    />
  );
};
