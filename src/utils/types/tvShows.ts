export type TVShow = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: { average: number | null };
  image: { medium: string | null; original: string | null } | null;
  summary: string;
  show: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string | null;
    officialSite: string;
    schedule: { time: string; days: string[] };
    rating: { average: number | null };
    weight: number;
    network: {
      id: number;
      name: string;
      country: { name: string; code: string; timezone: string };
      officialSite: string;
    };
    webChannel: null;
    dvdCountry: null;
    externals: { tvrage: null; thetvdb: null; imdb: null };
    image: { medium: string; original: string };
    summary: string;
    updated: number;
    _links: {
      self: { href: string };
      previousepisode: { href: string; name: string };
      nextepisode: { href: string; name: string };
    };
  };
  _links: {
    self: { href: string };
    show: { href: string; name: string };
  };
};

export type TVShowsList = Array<TVShow>;

export type TVShowCard = {
  showId: number;
  id: number;
  airdate: string;
  airtime: string;
  showName: string;
  language: string;
  network: string;
  image: { medium: string; original: string };
  apiUrl: {
    self: { href: string };
    show: { href: string; name: string };
  };
};

export type TVShowSchedule = {
  title: string;
  description: string;
  cards: TVShowCard[];
  link: {
    label: string
    href: string
  },
};

export type Episode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
    show: {
      href: string;
      name: string;
    };
  };
};

export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: string | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number;
    thetvdb: number | null;
    imdb: string | null;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
      name: string;
    };
  };
  episodes?: Array<Episode>;
};
