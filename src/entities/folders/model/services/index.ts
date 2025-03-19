import { API } from "@/shared/api";
import { AllTracksRequest, FoldersRequest, FoldersResponse, PopularTracksRequest, TracksResponse } from "../types";

export const FoldersAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getPopularFolders: builder.query<FoldersResponse, FoldersRequest>({
      query: (req) => ({
        url: 'sounds/tg/getpopularpacks',
        method: 'GET',
        headers: {
          page: req.id
        }
      }),
    }),
    getPopularTracks: builder.query<TracksResponse, PopularTracksRequest>({
      query: (req) => ({
        url: 'sounds/tg/getpopulartracks',
        method: 'GET',
        headers: {
          page: req.page
        }
      }),
    }),
    getAllTracks: builder.query<TracksResponse, AllTracksRequest>({
      query: (req) => ({
        url: 'sounds/tg/gettracks',
        method: 'POST',
        body: {
          Genre: req.Genre,
          Type: req.Type,
          Instruments: req.Instruments,
        },
        headers: {
          page: req.page
        }
      }),
      providesTags: ['LOVED'],
    }),
  })
});

export const { useGetPopularFoldersQuery, useGetPopularTracksQuery, useGetAllTracksQuery } = FoldersAPI;