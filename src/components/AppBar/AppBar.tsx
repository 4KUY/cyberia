import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './logo/Logo'
import './AppBar.css'
import { BurgerMenu } from './Menu/BurgerMenu'

export const AppBar: React.FC = () => {
  const items = ['Агентсво', 'Услуги' , 'Кейсы', 'Блог','Контакты']
  return (
    <header className='header'>
      <Logo width='131' height='28' />
      <div className='header_container'>
        <ul className='navigate' >
          {items.map(item => <li><Link to={'/'}>{item}</Link></li>)}
        </ul>
      </div>
      <Link to={'/burger'}><div className='burger_menu'></div></Link>
    </header>
  )
}

