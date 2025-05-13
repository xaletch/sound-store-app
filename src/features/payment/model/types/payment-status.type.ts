interface Body {
  Id: number;
  UserId: number;
  Price: number;
  Duration: number;
}

export interface PaymentStatusRequest {
  data: Body
  paymentId: string;
}

export type PaymentStatusResponse = undefined;