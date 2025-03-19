import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useTelegram } from "../telegram";
import { useAuthMutation } from "@/features/auth/models/services";
import { CreateAuth } from "@/features/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/entities/user/model/slice";
import { UserData } from "@/entities/user/model/types";

type AuthContextType = {
  isAuth: boolean;
}

export const AuthContext = createContext<AuthContextType>({ isAuth: false });

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { webApp } = useTelegram();
  const dispatch = useDispatch();

  const [isInitData, setInitData] = useState(localStorage.getItem("initData") || '');

  const isAuth = Boolean(isInitData);

  const [auth] = useAuthMutation();

  useEffect(() => {
    if (webApp) {
      webApp.expand();
    }
  }, [webApp]);
  
  const authorize = async () => {
    try {
      if (!webApp?.initData) {
        console.error("initData is not available.");
        return;
      }
  
      const initData = webApp.initData;
      const initDataUnsafe = webApp.initDataUnsafe;
      const res = await auth(initData).unwrap();
  
      console.log("initData", initData);
      console.log("res", res);
  
      if (res) {
        setInitData(initData);

        const user: UserData = {
          data: initDataUnsafe.user,
          credits: res.Credits,
          subscribe: res.CurentSubscribe
        };

        dispatch(setUser(user));
        CreateAuth("initData", initData);
      }
    }
    catch (err) {
      console.error('Authorize error', err);
    }
  }

  useEffect(() => {
    if (webApp) {
      if (webApp.initData) {
        authorize();
      } else {
        console.error("initData is not available yet.");
      }
    }
  }, [webApp]);

  return (
    <AuthContext.Provider value={{ isAuth }}>
      {children}
    </AuthContext.Provider>
  )
}