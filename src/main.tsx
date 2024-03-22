import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { AuthContextProvider } from './contexts/AuthContext.tsx'
import { SessionContextProvider } from './contexts/SessionContext.tsx'
import AppRouter from './routers/AppRouter.tsx'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>  {/*context d'authentification */}
      <SessionContextProvider>{/*  "" de session */}
        <Provider store={store}> {/* donne l'acces au strore de redux */}
          <AppRouter /> {/*  router de l'application: c'est le poitn d'entré */}
        </Provider>
      </SessionContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
