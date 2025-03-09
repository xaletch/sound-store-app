import { GetAuthToken } from "@/features/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  baseQuery:  fetchBaseQuery({
    baseUrl: ``,
    prepareHeaders: (headers) => {
        const token = GetAuthToken('access_token');
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }),
  reducerPath: "API",
  tagTypes: [""],
  endpoints: () => ({}),
})