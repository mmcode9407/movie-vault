import type { LucideProps } from "lucide-react";
import { LucideMessageSquareWarning } from "lucide-react";
import React from "react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<LucideProps>;
  button?: React.ReactElement<HTMLButtonElement>;
};

export const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <button />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: "size-16",
      })}

      <h2 className="text-lg text-center">{label}</h2>

      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};
