import React from 'react'
import { InputProps } from 'src/types/types'


//{ required: true, maxLength: 80 }


export const Input: React.FC<InputProps> = ({ reg, styleclass, containerTextfields, value, changeHandler, type, placeholder,option, label , nameReg }: InputProps) => {
  const register = reg
  return (
    <div className={ containerTextfields }>
      <label>{label}</label>
      
     <input {...register(`${nameReg}`,option )} className={ styleclass } /> {/*value={value} onChange={changeHandler}  */}
    </div>
  )
}
