import React from 'react'
import { Triangle } from 'react-loader-spinner'

const PageLoader: React.FC = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-brown_dark'>

            <Triangle
                visible={true}
                height={60}
                width={60}
                color='rgba(216, 213, 131, 1)'
                ariaLabel='triangle-loading'
                wrapperStyle={{}}
                wrapperClass=''
            />
        </div>
    )
}

export default PageLoader