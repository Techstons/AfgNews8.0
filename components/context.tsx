import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  User,
} from "firebase/auth";
import { createContext, ReactNode, useContext, useState } from "react";
import { useAuth } from "utils/firebase";

interface IApiContext {
  // We defined the user type in `index.d.ts`, but it's
  // a simple object with email, name and password.
  user?: User;
  googleLogin: () => void;
  facebookLogin: () => void;
  twitterLogin: () => void;
  logout: () => Promise<void>;
}

const ApiContext = createContext<IApiContext>({} as IApiContext);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  const errorLogger = (err: any) => {
    console.log(`
          error code: ${err.errorCode}
          error message: ${err.errorMessage}
          error email: ${err.email}
          error credential: ${err.credential}
        `);
  };

  const googleLogin = () => {
    signInWithPopup(useAuth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        errorLogger({ errorCode, errorMessage, email, credential });
      });
  };

  const facebookLogin = () => {
    signInWithPopup(useAuth, new FacebookAuthProvider())
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        errorLogger({ errorCode, errorMessage, email, credential });
      });
  };

  const twitterLogin = () => {
    signInWithPopup(useAuth, new TwitterAuthProvider())
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);

        errorLogger({ errorCode, errorMessage, email, credential });
      });
  };

  const logout = useAuth.signOut; // Implement logout function

  const value = {
    user,
    googleLogin,
    facebookLogin,
    twitterLogin,
    logout,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  return useContext(ApiContext);
};
