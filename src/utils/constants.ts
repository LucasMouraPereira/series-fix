export const BASE_URL = process.env.NEXT_PUBLIC_GATEWAY_API

export enum paths {
  HOME = '/',
  PROGRAMS = '/programs',
  FAVORITES = '/favorites',
}

export enum endpointsComplements {
  SCHEDULE = 'schedule',
  COUNTRY = 'country',
  DATE = 'date',
  SHOWS = 'shows',
  SEARCH = 'search',
  QUERY = 'q',
  PAGE = 'page',
  EPISODES = 'episodes'
}
