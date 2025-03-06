import { Button } from "@/components/ui/button";

type PaginationProps = {
  page: number;
  onPage: (page: number) => void;
  paginatedMetadata: {
    count: number;
    hasNextPage: boolean;
  };
};

const Pagination = ({
  page,
  onPage,
  paginatedMetadata: { count, hasNextPage },
}: PaginationProps) => {
  const startOffset = page > 1 ? (page - 1) * 20 + 1 : 1;
  const endOffset = startOffset - 1 + 20;
  const actualEndOffset = Math.min(endOffset, count);

  const handleNextPage = () => {
    onPage(++page);
  };

  const handlePrevPage = () => {
    onPage(--page);
  };

  const label = `${startOffset} - ${actualEndOffset} of ${count}`;

  const nextButton = (
    <Button
      variant="outline"
      size="sm"
      disabled={!hasNextPage}
      onClick={handleNextPage}>
      Next
    </Button>
  );

  const prevButton = (
    <Button
      variant="outline"
      size="sm"
      disabled={page === 1}
      onClick={handlePrevPage}>
      Prev
    </Button>
  );

  return (
    <div className="flex justify-between items-center">
      <p className="text-sm text-muted-foreground">{label}</p>

      <div className="flex gap-x-2">
        {prevButton}

        {nextButton}
      </div>
    </div>
  );
};

export { Pagination };
