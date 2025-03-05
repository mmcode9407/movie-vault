export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genres: string[];
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
};

export type Genre = string;

export const movieData: Movie[] = [
  {
    adult: false,
    backdrop_path: "/kEYWal656zP5Q2Tohm91aw6orlT.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    id: 1064213,
    original_language: "en",
    original_title: "Anora",
    overview:
      "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.",
    popularity: 1016.68,
    poster_path: "/cgXk2tNYhJZLXdBDO5DidAVzQ82.jpg",
    release_date: "2024-10-14",
    title: "Anora",
    video: false,
    vote_average: 7.091,
    vote_count: 1269,
  },
  {
    adult: false,
    backdrop_path: "/jl2YIADk391yc6Qjy9JhgCRkHJk.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    id: 1064486,
    original_language: "en",
    original_title: "Memoir of a Snail",
    overview:
      "Forcibly separated from her twin brother when they are orphaned, a melancholic misfit learns how to find confidence within herself amid the clutter of misfortunes and everyday life.",
    popularity: 664.263,
    poster_path: "/lWh5OlerPR1c1cfn1ZLq0lpqFds.jpg",
    release_date: "2024-10-17",
    title: "Memoir of a Snail",
    video: false,
    vote_average: 7.8,
    vote_count: 224,
  },
  {
    adult: false,
    backdrop_path: "/l2QSVFR5aLcW1Vl4cGKrQkEp6fY.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    id: 1201012,
    original_language: "hi",
    original_title: "धूम धाम",
    overview:
      'On their wedding night, an oddball couple is thrust into a chaotic chase, dodging goons and cops in a frenzied hunt for the mysterious "Charlie."',
    popularity: 568.961,
    poster_path: "/2E7me3rPi8HqaeheuD86YlpNX6k.jpg",
    release_date: "2025-02-13",
    title: "Dhoom Dhaam",
    video: false,
    vote_average: 6.4,
    vote_count: 20,
  },
  {
    adult: false,
    backdrop_path: "/uJK0jjJ8QDOQw5lcNBwu059ht4D.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    id: 1294203,
    original_language: "en",
    original_title: "My Fault: London",
    overview:
      "18-year-old Noah moves from America to London, with her mother who's recently fallen in love with William, a wealthy British businessman. Noah meets William’s son, bad-boy Nick, and soon discovers there is an attraction between them neither can avoid. As Noah spends the summer adjusting to her new life, her devastating past will catch up with her while falling in love for the first time.",
    popularity: 549.7,
    poster_path: "/ttN5D6GKOwKWHmCzDGctAvaNMAi.jpg",
    release_date: "2025-02-12",
    title: "My Fault: London",
    video: false,
    vote_average: 7.473,
    vote_count: 274,
  },
];

export const genres: Genre[] = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
];
