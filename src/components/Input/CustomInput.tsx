import React, { ChangeEvent } from 'react'

//on définit les types de props que l'on attent
interface CustomInputProps {
  state: string;
  label: string;
  callable: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ state, label, callable, type }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={state}
        className='block text-white font-bold mb-2'
      >{label}</label>
      <input
        type={type}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
        value={state}
        onChange={callable}
      />

    </div>
  )
}

export default CustomInput