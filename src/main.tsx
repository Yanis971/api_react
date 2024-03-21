import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import OfflineRouter from './router/OfflineRouter.tsx'
import { AuthContextProvider } from './contexts/AuthContext.tsx'
import { SessionContextProvider } from './contexts/SessionContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SessionContextProvider>
        <App />
      </SessionContextProvider >
    </ AuthContextProvider>
  </React.StrictMode >,
)
