import { Telegram } from "@twa-dev/types";

declare global {
  interface Window {
    Telegram: Telegram;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YooMoneyCheckoutWidget: any;
  }
}

window.Telegram.WebApp.HapticFeedback.notificationOccurred("success");
