import React from 'react'
interface TextfieldStyles { placeholder: string, containerTextfields: string, styleclass: string, value?: string, changeHandler?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }
export const Textfield: React.FC<TextfieldStyles> = ({ containerTextfields, styleclass, value, changeHandler, placeholder }) => {
  return (
    <div className={ containerTextfields }>
    <textarea placeholder={placeholder} className={ styleclass } value={value} onChange={changeHandler} ></textarea>
    </div>
  )
}
