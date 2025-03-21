import { API } from "@/shared/api";
import { GenreResponse, InstrumentResponse } from "../types";

export const FilterApi = API.injectEndpoints({
  endpoints: (builder) => ({
    genre: builder.query<GenreResponse, void>({
      query: () => ({
        url: 'sounds/getallgenre',
        method: 'GET',
      }),
    }),
    instruments: builder.query<InstrumentResponse, void>({
      query: () => ({
        url: 'sounds/getallinstrument',
        method: 'GET',
      }),
    })
  })
});

export const { useGenreQuery, useInstrumentsQuery } = FilterApi;