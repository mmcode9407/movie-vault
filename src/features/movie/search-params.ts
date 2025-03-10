﻿import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

export const searchParser = parseAsString.withDefault("").withOptions({
  shallow: false,
  clearOnDefault: true,
});

export const genreParser = parseAsString.withDefault("").withOptions({
  shallow: false,
  clearOnDefault: true,
});

export const ratingParser = {
  ratingKey: parseAsInteger.withDefault(0),
  ratingDir: parseAsString.withDefault("gte"),
};

export const ratingOptions = {
  shallow: false,
  clearOnDefault: true,
};

export const sortParser = {
  sortKey: parseAsString.withDefault("popularity"),
  sortValue: parseAsString.withDefault("desc"),
};

export const sortOptions = {
  shallow: false,
  clearOnDefault: true,
};

export const pageParser = parseAsInteger.withDefault(1).withOptions({
  shallow: false,
  clearOnDefault: true,
});

export const searchParamsCache = createSearchParamsCache({
  search: searchParser,
  genre: genreParser,
  ...ratingParser,
  ...sortParser,
  page: pageParser,
});

export type ParsedSearchParams = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>;
