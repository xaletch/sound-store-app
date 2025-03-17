import { API } from "@/shared/api";
import { SubscribeResponse } from "../types";

export const SubscribeAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getSubscribers: builder.query<SubscribeResponse, void>({
      query: () => ({
        url: 'sounds/getallssubscribes',
        method: 'GET',
      }),
    }),
  })
});

export const { useGetSubscribersQuery } = SubscribeAPI;