import { API } from "@/shared/api";
import { SubscribePostResponse, SubscribeRequest, SubscribeResponse } from "../types/subscribe.type";
import { PaymentStatusRequest, PaymentStatusResponse } from "../types/payment-status.type";
import { ActiveSubscribeResponse } from "../types/active-subscribe.type";

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
        url: `sounds/tg/paymentstatus/${req.token}`,
        method: "POST",
      }),
    }),
    activeSubscribe: builder.query<ActiveSubscribeResponse, void>({
      query: () => ({
        url: "sounds/tg/activesub",
        method: "GET",
      })
    }),
    cancelSubscribe: builder.mutation<SubscribePostResponse, void>({
      query: () => ({
        url: "sounds/tg/cancelsubsribe",
        method: "POST"
      }),
    }),
    renewSubscribe: builder.mutation<SubscribePostResponse, void>({
      query: () => ({
        url: "sounds/tg/renewsubsribe",
        method: "POST"
      })
    }),
  }),
});

export const { useSubscribeMutation, usePaymentStatusMutation, useActiveSubscribeQuery, useCancelSubscribeMutation, useRenewSubscribeMutation } = PaymentApi;