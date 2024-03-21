import React, { useEffect } from 'react'
import { useSessionContext } from '../contexts/SessionContext'
import { RouterProvider } from 'react-router-dom'
import OnlineRouter from './OnlineRouter'
import OfflineRouter from './OfflineRouter'
import { STORAGE_KEY } from '../constants/AppConstant'
import { useAuthContext } from '../contexts/AuthContext'

const AppRouter: React.FC = () => {
  //récupération de l'état de la session depuis le contexte
  const {inSession, setInSession} = useSessionContext()
  //recuperation des informations de l'utilisateur
  const {setUserInfo, userId} = useAuthContext();

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
  }, [setUserInfo, inSession, userId]);


  return (
    <RouterProvider router={inSession ? OnlineRouter : OfflineRouter}/>
  )
}

export default AppRouter