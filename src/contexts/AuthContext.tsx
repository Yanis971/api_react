// définitions des propriéte des utilisateurs
interface UserInfo {
    userId: string;
    name: string;
    email: string;

}

// definition du type de l'objet contexte
interface AuthContextType extends UserInfo {
    setUserInfo: (userInfo: UserInfo) => void;
    signIn: (UserInfo: UserInfo) => void;
    signOut: () => void;
}