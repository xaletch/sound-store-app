import { API } from "@/shared/api";

export const AuthAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    auth: builder.mutation({
      query: (initdata: string | undefined) => ({
        url: 'sounds/tg/adduser',
        method: 'POST',
        headers: {
          'initdata': initdata
        }
      }),
      invalidatesTags: ['DOWNLOAD']
    }),
  })
});

export const { useAuthMutation } = AuthAPI;