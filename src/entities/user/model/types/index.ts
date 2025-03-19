import { ITelegramUser } from "@/app/providers/telegram/telegram.types";

export interface UserData {
  data: ITelegramUser;
  credits: number;
  subscribe: string;
}