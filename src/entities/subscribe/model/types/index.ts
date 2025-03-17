export interface SubscribeData {
  Id: number;
  Type: string;
  YearPrice: number;
  MonthPrice: number;
  Credits: number;
}

export interface SubscribeResponse {
  Genres: SubscribeData[];
}