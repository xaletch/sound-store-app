import { API } from "@/shared/api";
import { SendEmailRequest, SendEmailResponse } from "../types/send-email.type";

export const EmailAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation<SendEmailResponse, SendEmailRequest>({
      query: (data) => ({
        url: "sounds/tg/email",
        method: "PATCH",
        body: data,
      }),
    }),
  }), 
});

export const { useSendEmailMutation } = EmailAPI;