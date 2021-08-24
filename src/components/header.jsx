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
        title: 'О нас',
        to: '/about',
    },
    {
        title: 'Услуги',
        to: '/services',
    },
    {
        title: 'Галерея',
        to: '/gallery',
    },
    {
        title: 'Контакты',
        to: '/contacts',
    },
]

function Header() {
    return (
        <header className='header'>
            <div className='header__inner'>
                <div className='header__link-logo'>
                    <Link className='header__menu-link' to="/">
                        <img className='header__logo-img' src={logo} alt='wood worker 62 logo' />
                    </Link>
                </div>
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
                    <div className='header__info'>
                        <a className='header__info-phone'
                            href='tel:+79005551166' 
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                            <img className='header__info-svg' src={phone_svg} alt='phone'/>
                            <span className='header__info-text'>+7(000)000-00-00</span>
                        </a>
                        <a className='header__info-email'
                            href='mailto:woodworks62@yandex.ru?subject=Woodworks62'
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                            <img className='header__info-svg' src={email_svg} alt='email'/>
                            <span className='header__info-text'>woodworker62@yandex.ru</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
