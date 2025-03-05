"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FilterChipButtonProps = {
  label: string;
  isActive: boolean;
};

export const FilterChipButton = ({
  label,
  isActive,
}: FilterChipButtonProps) => {
  return (
    <Button
      size="sm"
      className={cn("rounded-full", {
        "bg-muted text-muted-foreground": isActive,
      })}>
      {label}
    </Button>
  );
};
