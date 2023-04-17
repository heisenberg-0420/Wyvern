import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'fc6a4ceae6mshb40de140b065318p1d3ceejsn698f55804dd1');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track?startFrom=1' }),
    getGenreSongs: builder.query({ query: (genre) => `/charts/track?listId=genre-global-chart-${genre}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
    getRelatedSongs: builder.query({ query: ({ songid }) => `/songs/list-recommendations?key=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}` }),
    getArtistTopSongs: builder.query({ query: (artistId) => `/artists/get-top-songs?id=${artistId}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/track?listId=ip-country-chart-${countryCode}&pageSize=16&startFrom=1` }),
    getSearchSongs: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
  useGetSongsByCountryQuery,
  useGetGenreSongsQuery,
  useGetSearchSongsQuery,
} = shazamApi;
