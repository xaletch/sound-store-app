import React, { createContext, useContext, useState } from 'react';

interface ICurrentPathContext {
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>>;
}

const CurrentPathContext = createContext<ICurrentPathContext | undefined>(undefined);

export const CurrentPathProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

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
