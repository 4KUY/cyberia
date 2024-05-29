import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderContainter: React.FC = () => {
  const navigate = 'Проекты'
  return (
    <div className='breadcrumbs'>
          <div className='navLink' ><Link to={'/'}>Главная</Link> <span >/ {navigate}</span></div>
          <h1 className='title'>Кейсы</h1>
        </div>
  )
}
