import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderContainter: React.FC = () => {
  const navigate = 'Проекты'
  return (
    <div>
          <div className='breadcrumbs'><Link to={'/'}>Главная</Link> <span className='navLink'>/ {navigate}</span></div>
          <h1 className='title'>Проекты</h1>
        </div>
  )
}
