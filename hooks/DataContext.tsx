import { createContext, useState } from 'react';
import { ReactNode } from 'react';

interface DataContextProps {
  newdata: object;
  setData: (newdata: object) => void;
}

export const DataContext = createContext<DataContextProps>({ newdata: {}, setData: () => {} });


export function DataProvider({ children }: { children: ReactNode }) {
  const [newdata, setData] = useState({});

  return (
    <DataContext.Provider value={{ newdata, setData }}>
      {children}
    </DataContext.Provider>
  );
}