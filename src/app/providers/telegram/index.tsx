import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ITelegramUser, IWebApp } from "./telegram.types";
import { useCurrentPath } from "../path-provider";

export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}
const TelegramContext = createContext<ITelegramContext>({});

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);

  const { currentPath, setCurrentPath } = useCurrentPath();

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [setCurrentPath]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = (window as any).Telegram?.WebApp;

    console.log('initial app');

    
    if (app) {
      console.log('app success!', app)
      app.ready();
      setWebApp(app);
      
      const backButton = app.BackButton;
      console.log('currentPath: ', currentPath);
      
      const noBackButtonRoutes = [
        "/",
        "/search",
        "/folders",
        "/favourites"
      ];

      if (noBackButtonRoutes.includes(currentPath)) {
        console.log('currentPath include: ', currentPath);

        backButton.hide();
      } else {
        backButton.show();
      }

      const handleBackButtonClick = () => {
        window.history.back();
      };

      backButton.onClick(handleBackButtonClick);

      return () => {
        backButton.offClick(handleBackButtonClick);
        backButton.hide();
      };
    } else {
      console.log('app failed')
    }
  }, [currentPath]);

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          initData: webApp.initData,
          user: webApp.initDataUnsafe.user,
        }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTelegram = () => useContext(TelegramContext);