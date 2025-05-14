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

export interface PaymentSuccessStatusResponse {
  status: 'success';
}

export interface PaymentFailedStatusResponse {
  status: 'failed'
  error: string;
}
 
export type PaymentStatusResponse = PaymentSuccessStatusResponse | PaymentFailedStatusResponse;