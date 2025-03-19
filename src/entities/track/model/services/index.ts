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
  })
});

export const { useLazyListenTrackQuery } = TrackAPI;