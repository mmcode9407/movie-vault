export const MOVIE_SORT_OPTIONS = [
  {
    label: "Most popular",
    sortKey: "popularity",
    sortValue: "desc",
  },
  {
    label: "Least popular",
    sortKey: "popularity",
    sortValue: "asc",
  },
  {
    label: "Newest",
    sortKey: "primary_release_date",
    sortValue: "desc",
  },
  {
    label: "Oldest",
    sortKey: "primary_release_date",
    sortValue: "asc",
  },
  { label: "The best", sortKey: "vote_average", sortValue: "desc" },
  { label: "The worst", sortKey: "vote_average", sortValue: "asc" },
];
