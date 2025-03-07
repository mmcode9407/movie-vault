export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieWithGenresNames extends Movie {
  genre_names: string[];
}

export interface Genre {
  id: number;
  name: string;
}

export type GetMoviesResponse = {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
};

export type GetGenresResponse = {
  genres: Genre[];
};
