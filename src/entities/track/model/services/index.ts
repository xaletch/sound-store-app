import { API } from "@/shared/api";
import { ListenTrackRequest, ListenTrackResponse } from "../types";

export const TrackAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    listenTrack: builder.query<ListenTrackResponse, ListenTrackRequest>({
      query: (req) => ({
        url: 'sounds/tg/listentrack',
        method: 'GET',
        headers: {
          trackid: req.id.toString()
        }
      }),
    }),
    downloadTrack: builder.mutation({
      query: (req) => ({
        url: 'sounds/tg/downloadTrack',
        method: 'GET',
        headers: {
          trackid: req.id.toString()
        }
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: 'DOWNLOAD', id: arg.id },
        { type: 'DOWNLOAD', id: 'LIST' },
      ],
    }),
  })
});

export const { useLazyListenTrackQuery, useDownloadTrackMutation } = TrackAPI;