import { API } from "@/shared/api";

export const TrackAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    listenTrack: builder.query({
      query: (req) => ({
        url: 'sounds/tg/listentrack',
        method: 'GET',
        headers: {
          id: req.id.toString()
        }
      }),
    }),
  })
});

export const { useLazyListenTrackQuery } = TrackAPI;