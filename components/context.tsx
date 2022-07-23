import { User } from "firebase/auth";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IApiContext {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const ApiContext = createContext<IApiContext>({} as IApiContext);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  const value = {
    user,
    setUser,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  return useContext(ApiContext);
};
