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
          Name: req.Name,
          Genre: req.Genre,
          Type: req.Type,
          Instruments: req.Instruments,
        },
        headers: {
          page: req.page
        }
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.Tracks.map(({ Id }) => ({ type: 'LOVED' as const, id: Id.toString() })),
              ...result.Tracks.map(({ Id }) => ({ type: 'DOWNLOAD' as const, id: Id.toString() })),
              { type: 'LOVED' as const, id: 'LIST' },
              { type: 'DOWNLOAD' as const, id: 'LIST' },
            ]
          : [
              { type: 'LOVED' as const, id: 'LIST' },
              { type: 'DOWNLOAD' as const, id: 'LIST' },
            ],
    }),
    getAllFolders: builder.query<FoldersResponse, AllTracksRequest>({
      query: (req) => ({
        url: 'sounds/tg/getpacks',
        method: 'POST',
        body: {
          Genre: req.Genre,
          Type: req.Type,
          Instruments: req.Instruments,
        },
        headers: {
          page: req.page
        }
      })
    }),
  })
});

export const { useGetPopularFoldersQuery, useGetPopularTracksQuery, useGetAllTracksQuery, useGetAllFoldersQuery } = FoldersAPI;