import { GetAuth } from "@/features/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  baseQuery:  fetchBaseQuery({
    baseUrl: `https://layer-app.ru/`,
    prepareHeaders: (headers) => {
        const initData = GetAuth('initData');
        if (initData) {
            headers.set('initdata', initData)
        }
        return headers;
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }),
  reducerPath: "API",
  tagTypes: ["LOVED", "DOWNLOAD"],
  endpoints: () => ({}),
})