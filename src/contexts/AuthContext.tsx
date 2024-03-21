import { ReactElement, ReactNode, createContext, useContext, useState } from "react";
import { STORAGE_KEY } from "../constants/AppConstant";

// définitions des propriéte des utilisateurs
interface UserInfo {
    userId: string;
    name: string;
    email: string;

}

// definition du type de l'objet contexte
interface AuthContextType extends Partial<UserInfo> {
    setUserInfo: (userInfo: UserInfo) => void;
    signIn: (UserInfo: UserInfo) => void;
    signOut: () => void;
}

// creation du contexte par defaut de l'utilisation n'est pas connecté
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// definition des propriete
interface AuthContextProviderProps {
    children: ReactNode;
}

// creation du composant contexte
const AuthContextProvider = ({ children }: AuthContextProviderProps): ReactElement => {
    // on declare le state de l'utilisateur
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined)

    // methode pour connecter l'utilisateur
    const signIn = () => {
        (user: UserInfo): void => {
            setUserInfo(user);
            localStorage.setItem('user', JSON.stringify(user));
        }
    }
    // methode pour deconnecter l'utilisateur
    const signOut = () => {
        setUserInfo(undefined);
        localStorage.removeItem(STORAGE_KEY);
    }
    // definition des propriétes du contexte
    const contextValue: AuthContextType = {
        signIn,
        signOut,
        setUserInfo,
        ...userInfo || {}
    }
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
};

// methode  pour recuperer le context
const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext doit etre utilisé dans un AuthContextProvider');
    }
    return context;
}
// export des propriété
export { AuthContext, AuthContextProvider, useAuthContext }