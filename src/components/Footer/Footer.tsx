import React from 'react'
import { Logo } from '../AppBar/logo/Logo'
export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
        <div className='footer_block' >
                <div className='footerour' ><Logo width='205' height='auto' />Заказная веб-разработка <br/> и усиление IT-команд</div>
                <div className='footer_links'>
                    <ul className='footer_links'>
                        <li>+7 960 959 18 66</li>
                        <li>hello@cyberia.studio</li>
                        <li>г.Барнаул, ул.Аносова, д.3б, оф.8</li>
                    </ul>
                    <ul className='footer_links'>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>Услуги</li>
                    </ul>
                    <ul className='footer_links'>
                        <li>Проекты</li>
                        <li>Вакансии</li>
                    </ul>
                </div>

            </div>
    </footer>
  )
}
