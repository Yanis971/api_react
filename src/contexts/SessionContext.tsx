import { createContext, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { STORAGE_KEY } from "../constants/AppConstant";

//on définit le type d'objet contexte
interface SessionContextType {
  inSession: boolean;
  setInSession: (inSession: boolean) => void;
}

//création du contexte
const SessionContext = createContext<SessionContextType | null>(null);

//propriété du composant
interface SessionContextProviderProps {
  children: ReactNode;
}

//création du composant contexte
const SessionContextProvider = ({ children }: SessionContextProviderProps): ReactElement => {
  const [inSession, setInSession] = useState<boolean>(false);
  const { setUserInfo } = useAuthContext();

  //méthode pour récupérer les informations de l'utilisateur
  const getUserInfo = async () => {
    const userString = localStorage.getItem(STORAGE_KEY);
    if (userString) {
      const user = JSON.parse(userString);
      setUserInfo(user);
      setInSession(true);
    } else {
      setInSession(false);
    }
  };

  //appel de la méthode pour récupérer les infos de l'utilisateur
  useEffect(() => {
    getUserInfo();
  }, [setUserInfo, inSession]);

  //définition des propriétés du contexte
  const valueContext: SessionContextType = {
    inSession,
    setInSession
  }

  return <SessionContext.Provider value={valueContext}>{children}</SessionContext.Provider>
};

//méthode pour récupérer le contexte
const useSessionContext = ():SessionContextType => {
  const context = useContext(SessionContext);
  if(!context){
    throw new Error('useSessionContext doit être utilisé dans un SessionContextProvider');
  }
  return context;
}

export {SessionContext, SessionContextProvider, useSessionContext};