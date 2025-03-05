type FilterSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const FilterSection = ({ title, children }: FilterSectionProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
};
