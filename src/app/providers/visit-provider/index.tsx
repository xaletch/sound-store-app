import { createContext, PropsWithChildren, useContext, useState } from "react";

interface VisitContextType {
  firstVisit: boolean;
  setFirstVisit: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisitContext = createContext<VisitContextType | undefined>(undefined);

export const useVisit = () => {
  const context = useContext(VisitContext);
  if (!context) {
    throw new Error('useFirstVisit must be used within a VisitProvider');
  }
  return context;
};

export const VisitProvider = ({ children }: PropsWithChildren) => {
  const [firstVisit, setFirstVisit] = useState<boolean>(() => !localStorage.getItem('first-visit'));

  return (
    <VisitContext.Provider value={{ firstVisit, setFirstVisit }}>
      {children}
    </VisitContext.Provider>
  );
};