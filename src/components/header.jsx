import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../styles/img/logo.png';
import phone_svg from '../styles/img/svg/phone.svg';
import email_svg from '../styles/img/svg/email.svg';


const MENU = [
    {
        title: 'Home',
        to: '/',
    },
    {
        title: 'Галерея',
        to: '/gallery',
    },
    {
        title: 'О нас',
        to: '/about',
    },
    {
        title: 'Услуги',
        to: '/works',
    },
    {
        title: 'Контакты',
        to: '/info',
    },
]

function Header() {
    return (
        <header className='header'>
            <div className='header__inner'>
                <Link className='header__menu-link' to="/">
                    <img className='header__logo' src={logo} alt='wood worker 62 logo' />
                </Link>
                <nav className='header__navigation'>
                    <ul className='header__menu-list'>
                        {
                            MENU.map(({title, to}, index) => (
                                <li className='header__menu-item' key={`${title}_${index}`}>
                                    <Link className='header__menu-link' to={to}>{title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className='header__info'>
                    <a className='header__info-phone'
                        href='tel:+79005551166' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <img className='header__info-svg' src={phone_svg} alt='phone'/>
                        <span className='header__info-text'>Позвонить</span>
                    </a>
                    <a className='header__info-email'
                        href='mailto:woodworks62@yandex.ru?subject=Woodworks62'
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <img className='header__info-svg' src={email_svg} alt='email'/>
                        <span className='header__info-text'>Написать</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;
