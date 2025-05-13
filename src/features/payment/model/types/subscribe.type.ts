
type SubscribeDuration = 1 | 12;

type ActiveSubscribe = {
  Id: number;
  UserId: number;
  Price: number;
  Duration: SubscribeDuration;
  AutoPay: boolean;
}

export interface SubscribeRequest {
  SubId: number;
  Duration: SubscribeDuration;
}

// export interface  SubscribeData {}

export interface SubscribeResponse {
  ActiveSubscribe: ActiveSubscribe;
  paymentId: string;
  token: string;
}