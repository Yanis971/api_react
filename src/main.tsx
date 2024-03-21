import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { AuthContextProvider } from './contexts/AuthContext.tsx'
import { SessionContextProvider } from './contexts/SessionContext.tsx'
import AppRouter from './routers/AppRouter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SessionContextProvider>
        <AppRouter />
      </SessionContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
