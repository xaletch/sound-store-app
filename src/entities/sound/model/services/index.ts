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
      providesTags: ['LOVED']
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