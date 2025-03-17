import { API } from "@/shared/api";
import { SoundRequest, SoundResponse } from "../types";

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
    })
  })
});

export const { useGetSoundQuery } = SoundAPI;