import React, { createContext, useContext, useEffect, useState } from 'react';

interface ICurrentPathContext {
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>>;
}

const CurrentPathContext = createContext<ICurrentPathContext | undefined>(undefined);

export const CurrentPathProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <CurrentPathContext.Provider value={{ currentPath, setCurrentPath }}>
      {children}
    </CurrentPathContext.Provider>
  );
};

export const useCurrentPath = () => {
  const context = useContext(CurrentPathContext);
  if (!context) {
    throw new Error('use current path');
  }
  return context;
};
