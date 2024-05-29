import React from 'react'
import {TitleButton} from 'src/types/types'

export const Button: React.FC<TitleButton> = ({ title, stylesClass, type }: TitleButton) => {
  return (
    <button className={stylesClass} type="submit" >{ title }</button>
  )
}
