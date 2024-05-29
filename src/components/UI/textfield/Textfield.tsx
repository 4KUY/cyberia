import React from 'react'
import { TextfieldStyles } from 'src/types/types'
export const Textfield: React.FC<TextfieldStyles> = ({ containerTextfields,label, styleclass, value, changeHandler, placeholder }) => {
  return (
    <div className={ containerTextfields }>
      
      <label>{label}</label>
    <textarea  value={value} onChange={changeHandler} ></textarea>
    </div>
  )
}
