import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
interface Burgerlinks {
  items: string[]
}

export const BurgerMenu: React.FC<Burgerlinks> = ({items}) => {
  return (
    <div className='menu'>
        <div className='header__menu'> <Link to={'/'}><div className='cancel' ></div> </Link> </div>


        <div className='menu__content'>
                <ul>
                    {items.map(item => <li><Link to={'/'}>{item}</Link></li>)}
                </ul>
                <hr ></hr>
        </div>
        
      
        <div className='menu__footer'>
        </div>
    </div>
  )
}
