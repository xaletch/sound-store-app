export interface SubscribeData {
  Id: number;
  Type: string;
  YearPrice: number;
  MonthPrice: number;
  MonthCredits: number;
  YearCredits: number;
}

export interface SubscribeResponse {
  Genres: SubscribeData[];
}