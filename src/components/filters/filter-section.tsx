import { LucideChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type FilterSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const FilterSection = ({ title, children }: FilterSectionProps) => {
  return (
    <Collapsible defaultOpen>
      <div className="flex justify-between mb-3">
        <h2 className="text-xl font-bold ">{title}</h2>

        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <LucideChevronsUpDown className="h-4 w-4" />

            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="flex flex-wrap gap-2 overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};
