import type { LucideProps } from "lucide-react";
import { LucideMessageSquareWarning } from "lucide-react";
import React from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<LucideProps>;
  button?: React.ReactElement<HTMLButtonElement>;
};

export const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning className="size-16" />,
  button = <button />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {icon}

      <h2 className="text-lg text-center">{label}</h2>

      {button}
    </div>
  );
};
