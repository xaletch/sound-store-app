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

  const { currentPath } = useCurrentPath();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = (window as any).Telegram?.WebApp;

    console.log('initial app');

    if (app) {
      console.log('app success!', app)
      app.ready();
      setWebApp(app);
    } else {
      console.log('app failed')
    }
  }, [webApp]);

  const hidePaths = ["/", "/search", "/folders", "/favourites"];

  useEffect(() => {
    if (!webApp) return;
  
    const backButton = webApp.BackButton;
  
    console.log('currentPath: ', currentPath);
  
    if (hidePaths.includes(currentPath)) {
      console.log('currentPath include: ', currentPath);
      backButton.hide();
    } else {
      backButton.show();
    }
  
    backButton.onClick(() => {
      window.history.back();
    });
  
    return () => {
      backButton.hide();
      backButton.onClick(() => {});
    };
  }, [currentPath, webApp]);

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

export const useTelegram = () => useContext(TelegramContext);