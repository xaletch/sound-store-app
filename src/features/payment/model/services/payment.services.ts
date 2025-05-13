import { API } from "@/shared/api";
import { SubscribeRequest, SubscribeResponse } from "../types/subscribe.type";
import { PaymentStatusRequest, PaymentStatusResponse } from "../types/payment-status.type";

export const PaymentApi = API.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation<SubscribeResponse, SubscribeRequest>({
      query: (body) => ({
        url: "sounds/tg/subscribe",
        method: "POST",
        body: body,
      }),
    }),
    paymentStatus: builder.mutation<PaymentStatusResponse, PaymentStatusRequest>({
      query: (req) => ({
        url: `sounds/tg/paymentstatus/${req.paymentId}`,
        method: "POST",
        body: req.data,
      }),
    }),
  }),
});

export const { useSubscribeMutation, usePaymentStatusMutation } = PaymentApi;