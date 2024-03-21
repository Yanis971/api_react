import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeOffline: React.FC = () => {
    return (
        <>
            <div>HomeOffline</div>
            <Outlet />
        </>
    )
}

export default HomeOffline