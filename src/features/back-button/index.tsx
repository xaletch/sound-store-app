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

    console.log(currentPath)

    const updateBackButton = () => {
      if (hidePaths.includes(currentPath)) {
        BackButton.hide();
        BackButton.onClick(() => {});
      } else {
        BackButton.show();
        BackButton.onClick(() => {
          router.history.back()
        });
      }
    };

    updateBackButton();

    const unsubscribe = router.subscribe("onBeforeNavigate", () => {
      updateBackButton();
    });

    return () => {
      BackButton.hide();
      BackButton.onClick(() => {});
      unsubscribe();
    };
  }, [router.state.location.pathname, webApp]);

  return null;
}
