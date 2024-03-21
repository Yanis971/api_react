import React from 'react'

interface SubmitButtonProps {
  label: string;
}

const SubmitButton:React.FC<SubmitButtonProps> = ({label}) => {
  return (
    <button type="submit" className='bg-yellow hover:bg-yellow_hover text-black font-bold py-2 px-4 rounded'>
      {label}
    </button>
  )
}

export default SubmitButton