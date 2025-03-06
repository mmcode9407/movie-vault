"use client";

import { useQueryState } from "nuqs";
import { useEffect, useRef } from "react";

import { Pagination } from "@/components/pagination";

import { pageParser, searchParser } from "../search-params";

type MoviePaginationProps = {
  paginatedMovieMetadata: {
    count: number;
    hasNextPage: boolean;
  };
};

export const MoviePagination = ({
  paginatedMovieMetadata,
}: MoviePaginationProps) => {
  const [page, setPage] = useQueryState("page", pageParser);

  const [search] = useQueryState("search", searchParser);
  const prevSearch = useRef(search);

  useEffect(() => {
    if (search === prevSearch.current) return;

    prevSearch.current = search;

    setPage(1);
  }, [page, search, setPage]);

  return (
    <Pagination
      page={page}
      onPage={setPage}
      paginatedMetadata={paginatedMovieMetadata}
    />
  );
};
