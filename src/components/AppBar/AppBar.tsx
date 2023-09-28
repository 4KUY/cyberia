import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './logo/Logo'
export const AppBar: React.FC = () => {
  return (
    <header className='header'>
        <div className='header_container'>
            <Logo width='131' height='28'/>
            <Link to={'/'}>О нас</Link>
            <Link to={'/'}>Услуги</Link>
            <Link to={'/'}>Проекты</Link>
            <Link to={'/'}>Вакансии</Link>
            <Link to={'/'}>Контакты</Link>
            <img src="" alt="" />
            <img src='tog.png' alt="" />
        </div>
    </header>
  )
}
