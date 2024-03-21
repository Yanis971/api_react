import React from 'react'
import { Triangle } from 'react-loader-spinner'

const ButtonLoader:React.FC = () => {
  return (
    <Triangle 
      visible={true}
      height={60}
      width={60}
      color='rgba(216, 213, 131, 1)'
      ariaLabel='triangle-loading'
      wrapperStyle={{}}
      wrapperClass=''
    />
  )
}

export default ButtonLoader