import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "utils/firebase";

interface IApiContext {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const ApiContext = createContext<IApiContext>({} as IApiContext);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsub = onAuthStateChanged(useAuth, (user) => {
      setUser(user ?? undefined);
    });

    return unsub;
  }, []);

  const value = {
    user,
    setUser,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  return useContext(ApiContext);
};
