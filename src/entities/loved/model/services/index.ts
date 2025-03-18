import { API } from "@/shared/api";
import { LovedRequest, LovedResponse, LovedTrack } from "../types";

export const LovedAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getLoved: builder.query<LovedResponse, LovedRequest>({
      query: (req) => ({
        url: 'sounds/tg/getlovedtracks',
        method: 'POST',
        body: {
          Genre: req.Genre,
          Type: req.Type,
          Instruments: req.Instruments,
        },
        headers: {
          page: req.id
        }
      }),
      providesTags: ['LOVED'],
    }),
    lovedTrack: builder.mutation<void, LovedTrack>({
      query: (req) => ({
        url: 'sounds/tg/lovetrack',
        method: 'POST',
        headers: {
          trackid: req.id
        }
      }),
      invalidatesTags: ['LOVED'],
    }),
    unLovedTrack: builder.mutation<void, LovedTrack>({
      query: (req) => ({
        url: 'sounds/tg/unlovetrack',
        method: 'DELETE',
        headers: {
          trackid: req.id
        }
      }),
      invalidatesTags: ['LOVED'],
    }),
  })
});

export const { useGetLovedQuery, useLovedTrackMutation, useUnLovedTrackMutation } = LovedAPI;