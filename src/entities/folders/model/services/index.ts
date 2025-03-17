import { API } from "@/shared/api";
import { FoldersRequest, FoldersResponse } from "../types";

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
    })
  })
});

export const { useGetPopularFoldersQuery } = FoldersAPI;