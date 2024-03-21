import { createContext, ReactElement, ReactNode, useContext, useState } from "react";
import { STORAGE_KEY } from "../constants/AppConstant";

//définition des propriétes de l'utilisateur
interface UserInfo {
  userId: string;
  name: string;
  email: string;
}

//définition du type de l'objet contexte
interface AuthContextType extends Partial<UserInfo> {
  setUserInfo: (userInfo: UserInfo) => void;
  signIn: (userInfo: UserInfo) => void;
  signOut: () => void;
}

// création du contexte (par défaut l'utilisateur n'est pas connecté)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//définition des propriétés du composant
interface AuthContextProviderProps {
  children: ReactNode;
}

//création du composant contexte
const AuthContextProvider = ({ children }: AuthContextProviderProps): ReactElement => {
  //on déclare le state de l'utilisateur
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  //méthode pour connecter l'utilisateur
  const signIn = (user: UserInfo):void =>{
    setUserInfo(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }

  //méthode pour déconnecter l'utilisateur
  const signOut = ():void=>{
    setUserInfo(undefined);
    localStorage.removeItem(STORAGE_KEY);
  }

  //définition des propriétés du contexte
  const contextValue: AuthContextType = {
    signIn,
    signOut,
    setUserInfo,
    ...userInfo || {}
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
};

//méthode pour récupérer le contexte
const useAuthContext = ():AuthContextType => {
  const context = useContext(AuthContext);
  if(!context){
    throw new Error('useAuthContext doit être utilisé dans un AuthContextProvider');
  }
  return context;
}

//export les propriété du contexte
export {AuthContext, AuthContextProvider, useAuthContext};