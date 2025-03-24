import { useTelegram } from "@/app/providers/telegram";
import { useEffect, useState } from "react";

export const FullScreenTest = () => {

  const { webApp } = useTelegram();

  const [isExpanded, setIsExpanded] = useState(webApp?.isExpanded);

  useEffect(() => {
    const handleViewportChange = (data: { isStateStable: boolean }) => {
      if (data.isStateStable) {
        setIsExpanded(window.Telegram.WebApp.isExpanded);
      }
    };

    window.Telegram.WebApp.onEvent('viewportChanged', handleViewportChange);

    return () => {
      window.Telegram.WebApp.offEvent('viewportChanged', handleViewportChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (isExpanded) {
      console.log('message', 'Выйти из полного экрана')
    } else {
      window.Telegram.WebApp.expand();
    }
  };

  return (
    <button onClick={toggleFullscreen}>
      {isExpanded ? 'Выйти из полного экрана' : 'На весь экран'}
    </button>
  );
}
