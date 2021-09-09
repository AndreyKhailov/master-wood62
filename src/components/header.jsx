import React from 'react';

import logo from '../styles/img/logo.png';
import phone_svg from '../styles/img/svg/phone.svg';
import email_svg from '../styles/img/svg/email.svg';


const MENU = [
    {
        title: 'Home',
        to: '#top',
    },
    {
        title: 'О нас',
        to: '#about',
    },
    {
        title: 'Услуги',
        to: '#services',
    },
    {
        title: 'Галерея',
        to: '#gallery',
    },
    {
        title: 'Контакты',
        to: '#contacts',
    },
]

function Header() {
    const [mobile, setMobile] = React.useState(false);

    const onClickBurgerMenu = () => {
        setMobile(!mobile);
    }

    return (
        <header className='header'>
            <div className='header__inner'>
                <div className='header__link-logo'>
                    <a className='header__menu-link' href="#top">
                        <img className='header__logo-img' src={logo} alt='wood worker 62 logo' />
                    </a>
                </div>
                <nav className='header__navigation'>
                    <button 
                        className={!mobile ? "header__menu-burger" : "header__menu-burger btn--active"}
                        onClick={onClickBurgerMenu}
                    >
                        <span className="header__menu-line"></span>
                    </button>
                    <ul className={!mobile ? "header__menu-list" : "header__menu-list menu--active"}>
                        {
                            MENU.map(({title, to}, index) => (
                                <li className='header__menu-item' key={`${title}_${index}`}>
                                    <a  href={to} 
                                        className='header__menu-link' 
                                        onClick={onClickBurgerMenu}
                                    >
                                        {title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className='header__info'>
                    <a className='header__info-email'
                        href='mailto:woodworker.s62@gmail.com?subject=woodworker62'
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <img className='header__info-svg' src={email_svg} alt='email'/>
                        <span className='header__info-text'>
                            <abbr title="woodworker.s62@gmail.com">e-mail</abbr>
                        </span>
                    </a>
                    <a className='header__info-phone'
                        href='tel:+79005551166' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <img className='header__info-svg' src={phone_svg} alt='phone'/>
                        <span className='header__info-text'>
                            <abbr title="+7(000)000-00-00">Позвонить</abbr>
                        </span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;
