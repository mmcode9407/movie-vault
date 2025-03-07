"use client";

import { LucideX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchInputProps = {
  placeholder: string;
  value: string;
  onSearch: (value: string | null) => void;
};

export const SearchInput = ({
  placeholder,
  value,
  onSearch,
}: SearchInputProps) => {
  const handleSearch = (formData: FormData) => {
    const search = formData.get("search") as string;

    onSearch(search);
  };

  const handleClearSearch = () => {
    onSearch(null);
  };

  return (
    <form action={handleSearch} className="flex w-full gap-2">
      <div className="relative w-full">
        <Input name="search" defaultValue={value} placeholder={placeholder} />

        {value && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={handleClearSearch}>
            <LucideX />

            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>

      <Button type="submit">Search</Button>
    </form>
  );
};
