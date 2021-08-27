import React from 'react';

import location__svg from '../styles/img/svg/location.svg';
import phone__svg from '../styles/img/svg/call.svg';
import email__svg from '../styles/img/svg/emailForFooter.svg';
import time__svg from '../styles/img/svg/earth.svg';
import arrow__svg from '../styles/img/svg/rightArrow.svg';

function Footer({ setModalActive }) {
    const [dataForm, setDataForm] = React.useState('');

    const onClickUserConifrm = () => {
        setModalActive(true);
    };

    return (
        <>
            <div className="footer__top">
                <div className="container">
                    <div className="footer__top-inner">
                        <section className="footer__contacts">
                            <h3>Контакты</h3>
                            <ul>
                                <li className="footer__contacts-item">
                                    <img className='footer__item-svg' src={location__svg} alt='location'/>
                                    <span className="footer__item-text">Рязанская область, с. Сидоровка</span>
                                </li>
                                <li className="footer__contacts-item">
                                    <img className='footer__item-svg' src={phone__svg} alt='phone'/>
                                    <span className="footer__item-text">+7 000 000 00 00</span>
                                </li>
                                <li className="footer__contacts-item">
                                    <img className='footer__item-svg' src={email__svg} alt='email'/>
                                    <span className="footer__item-text">woodworker62@yandex.ru</span>
                                </li>
                                <li className="footer__contacts-item">
                                    <img className='footer__item-svg' src={time__svg} alt='time'/>
                                    <span className="footer__item-text">пн-сб 9:00-19:00, вс-выходной</span>
                                </li>
                            </ul>
                        </section>
                        <section className="footer__services">
                            <h3>Услуги</h3>
                            <ul>
                                <li className="footer__services-item">
                                    <img className='footer__item-svg' src={arrow__svg} alt='icon'/>
                                    <span className="footer__item-text">Отделочные работы</span>
                                </li>
                                <li className="footer__services-item">
                                    <img className='footer__item-svg' src={arrow__svg} alt='icon'/>
                                    <span className="footer__item-text">Строительство</span>
                                </li>
                                <li className="footer__services-item">
                                    <img className='footer__item-svg' src={arrow__svg} alt='icon'/>
                                    <span className="footer__item-text">Электрика</span>
                                </li>
                                <li className="footer__services-item">
                                    <img className='footer__item-svg' src={arrow__svg} alt='icon'/>
                                    <span className="footer__item-text">Сантехника</span>
                                </li>
                            </ul>
                        </section>
                        <section className="footer__form">
                            <h3>Написать нам</h3>
                            <div className="footer__form-sections">
                                <section className="footer__form-section">
                                    <input
                                        id='name'
                                        type='text'
                                        name='userName'
                                        value={dataForm}
                                        onChange={(e) => setDataForm(e.target.value)}
                                        placeholder='Иван'
                                    />
                                    <label htmlFor='userName'>Ваше имя *</label>
                                </section>
                                <section className="footer__form-section">
                                    <input
                                        id='userEmail'
                                        type='email'
                                        name='email'
                                        value={dataForm.email}
                                        onChange={(e) => setDataForm(e.target.value)}
                                        placeholder='Ivanov@gmail.com *'
                                    />
                                    <label htmlFor='userEmail'>Ваш e-mail *</label>
                                </section>
                                <section className="footer__form-section">
                                    <input
                                        id='phone'
                                        type='tel'
                                        name='phone'
                                        value={dataForm.phone}
                                        onChange={(e) => setDataForm(e.target.value)}
                                        placeholder='+7(000)000-00-00 *'
                                    />
                                    <label htmlFor='phone'>Номер телефона</label>
                                </section>
                                <section className="footer__form-section">
                                    <textarea
                                        id='message'
                                        name='text'
                                        value=''
                                        onChange=''
                                        placeholder='Оставьте сообщение'
                                    />
                                    <label htmlFor='message'>Комментарий</label>
                                </section>
                                <section className="footer__section-checkbox">
                                    <input className="footer__checkbox"
                                        id='checkbox'
                                        type='checkbox'
                                        name='checkbox'
                                        value='true'
                                        onChange=''
                                    />
                                    <label htmlFor='checkbox'></label>
                                    <p>Настоящим подтверждаю, что я ознакомлен и согласен с 
                                        <button onClick={onClickUserConifrm}>пользовательским соглашением</button>
                                    </p>
                                </section> 
                                <section className="footer__section-btn">
                                    <button 
                                        className="footer__form-btn"
                                        type='submit'
                                    >
                                        Отправить
                                    </button>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>            
            </div>
            <div className="footer__bottom">
                <h4>© woodWorker62, 2021</h4>
            </div>
        </>
    )
}

export default Footer;
