export type film = {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  imdb_id: string;
  tmdb_id: number;
};

export type MovieCredits = {
  cast: {
    name: string;
    profile_path: string;
    character: string;
  }[];
  crew: { name: string; profile_path: string; department: string }[];
};

export type MovieResponse = {
  id: number;
  title: string;
  overview: string;
  tagline: string;
  genres: { id: number; name: string }[];
  release_date: string;
  original_title: string;
  backdrop_path: string;
  homepage: string;
};

export type MovieTitles = {
  id: number;
  titles: {
    iso_3166_1: string;
    title: string;
    type: string;
  }[];
};

export type DateResponeTypes = {
  map(
    arg0: (dates: {
      iso_3166_1: string;
      release_dates: {
        certification: string;
        note: string;
        release_date: string;
        iso_639_1: string;
      }[];
    }) => import("react").JSX.Element,
  ): import("react").ReactNode;
  id: number;
  results: {
    iso_3166_1: string;
    release_dates: {
      certification: string;
      note: string;
      release_date: string;
      iso_639_1: string;
    }[];
  }[];
};

export type LinksTypes = {
  id: number;
  imdb_id: string | null;
  wikidata_id: string | null;
  facebook_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
};

export type statusComponetsProps = {
  data: { status: string; movieId?: string }[];
};
