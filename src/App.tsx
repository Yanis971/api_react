import React from 'react'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {

  return (
    <>
      <h1 className="text-red-500 text-3xl font-bold underline">
        Hello world!
      </h1>
      <Outlet />
    </>
  )
}

export default App