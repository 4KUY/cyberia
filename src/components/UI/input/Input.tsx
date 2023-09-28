import React from 'react'
interface InputProps { placeholder: string, type?: string, styleclass?: string, containerTextfields?: string, value?: string, changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void }

export const Input: React.FC<InputProps> = ({ styleclass, containerTextfields, value, changeHandler, type, placeholder }: InputProps) => {
  return (
    <div className={ containerTextfields }>
    <input placeholder={placeholder} type={type} className={ styleclass } value={value} onChange={changeHandler} />
    </div>
  )
}
