"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FilterChipButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const FilterChipButton = ({
  label,
  isActive,
  onClick,
}: FilterChipButtonProps) => {
  return (
    <Button
      size="sm"
      className={cn("rounded-full", {
        "bg-chart-2": isActive,
        "hover:bg-chart-2/90": isActive,
      })}
      onClick={onClick}>
      {label}
    </Button>
  );
};
