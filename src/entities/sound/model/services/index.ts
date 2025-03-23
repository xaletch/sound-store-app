import { API } from "@/shared/api";
import { SoundPhotoResponse, SoundRequest, SoundResponse } from "../types";

export const SoundAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getSound: builder.query<SoundResponse, SoundRequest>({
      query: (req) => ({
        url: 'sounds/tg/getpackinfo',
        method: 'GET',
        headers: {
          id: req.id
        }
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.PackInfo.Tracks.map(({ Id }) => ({ type: 'LOVED' as const, id: Id.toString() })),
              ...result.PackInfo.Tracks.map(({ Id }) => ({ type: 'DOWNLOAD' as const, id: Id.toString() })),
              { type: 'LOVED' as const, id: 'LIST' },
              { type: 'DOWNLOAD' as const, id: 'LIST' },
            ]
          : [
              { type: 'LOVED' as const, id: 'LIST' },
              { type: 'DOWNLOAD' as const, id: 'LIST' },
            ],
    }),
    getPackPhoto: builder.query<SoundPhotoResponse, SoundRequest>({
      query: (req) => ({
        url: 'sounds/tg/getpackphoto',
        method: 'GET',
        headers: {
          id: req.id.toString()
        }
      }),
    })
  })
});

export const { useGetSoundQuery, useGetPackPhotoQuery } = SoundAPI;