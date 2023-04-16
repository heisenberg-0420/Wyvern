import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'fd05849628msh53f671d36430a2bp139fe3jsne46bfaf53981');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track?startFrom=1' }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
    getRelatedSongs: builder.query({ query: ({ songid }) => `/songs/list-recommendations?key=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}` }),
    getArtistTopSongs: builder.query({ query: (artistId) => `/artists/get-top-songs?id=${artistId}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
} = shazamApi;
