export interface ActiveSubscribeResponse {
  UserId: number;
  Price: number;
  Credits: number;
  Duration: number;
  AutoPay: boolean;
  Used: number;
  EndAt?: string;
}