import { useTelegram } from "@/app/providers/telegram"
import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export const TelegramBackButton = () => {
  const router = useRouter();
  const { webApp } = useTelegram();
  
  useEffect(() => {
    if (!webApp) return;

    const BackButton = webApp.BackButton;
    const hidePaths = ["/", "/search", "/folders", "/favourites"];
    const currentPath = router.state.location.pathname;

    if (hidePaths.includes(currentPath)) {
      BackButton.hide();
      BackButton.onClick(() => {});
    } else {
      BackButton.show();
      BackButton.onClick(() => {
        router.navigate({ to: ".." });
      });
    }

    return () => {
      BackButton.hide();
      BackButton.onClick(() => {});
    };
  }, [router.state.location.pathname, webApp]);

  return null;
}
