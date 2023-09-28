import React from 'react'
interface TitleButton {
  title: string
  stylesClass: string
  submitForm: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

export const Button: React.FC<TitleButton> = ({ title, stylesClass, submitForm }: TitleButton) => {
  return (
    <button className={stylesClass} onClick={submitForm} >{ title }</button>
  )
}
