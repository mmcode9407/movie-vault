"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortSelectOption = {
  label: string;
  sortKey: string;
  sortValue: string;
};

type SortObject = {
  sortKey: string;
  sortValue: string;
};

type SortSelectProps = {
  options: SortSelectOption[];
  value: SortObject;
  onSelect: (values: SortObject) => void;
};

const SortSelect = ({ options, value, onSelect }: SortSelectProps) => {
  const handleSort = (compositeKey: string) => {
    const [sortKey, sortValue] = compositeKey.split("&");

    onSelect({
      sortKey,
      sortValue,
    });
  };

  return (
    <Select
      onValueChange={handleSort}
      defaultValue={value.sortKey + "&" + value.sortValue}>
      <SelectTrigger className="min-w-36">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.sortKey + option.sortValue}
            value={option.sortKey + "&" + option.sortValue}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { SortSelect };
