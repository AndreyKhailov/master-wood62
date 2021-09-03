import React from 'react';

import Form from './form';

import location__svg from '../styles/img/svg/location.svg';
import phone__svg from '../styles/img/svg/call.svg';
import email__svg from '../styles/img/svg/emailForFooter.svg';
import time__svg from '../styles/img/svg/earth.svg';
import arrow__svg from '../styles/img/svg/rightArrow.svg';

const arrInfoContacts = [
    {
        contacts: [
            {
                text: 'Рязанская область, с. Сидоровка',
                src: location__svg,
                alt: 'location',
            },
            {
                text: '+7 000 000 00 00',
                src: phone__svg,
                alt: 'phone',
            },
            {
                text: 'woodworker.s62@gmail.com',
                src: email__svg,
                alt: 'email',
            },
            {
                text: 'пн-сб 9:00-19:00, вс-выходной',
                src: time__svg,
                alt: 'works time',
            },
        ]
    },
    {
        services: ['Отделочные работы', 'Строительство', 'Электрика', 'Сантехника']
    }
];

function Footer({ setModalActive }) {

    return (
        <>
            <div id="contacts" className="footer__top">
                <div className="container">
                    <div className="footer__top-inner">
                        <section className="footer__contacts">
                            <h3>Контакты</h3>
                            <ul>
                                {
                                    arrInfoContacts[0].contacts.map(({text, src, alt}, index) => (
                                        <li className="footer__contacts-item" key={`${alt}_${index}`}>
                                            <img className='footer__item-svg' src={src} alt={alt}/>
                                            <span className="footer__item-text">{text}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                        <section className="footer__services">
                            <h3>Услуги</h3>
                            <ul>
                                {
                                    arrInfoContacts[1].services.map((text, index) => (
                                        <li className="footer__services-item" key={`${text}_${index}`}>
                                            <img className='footer__item-svg' src={arrow__svg} alt='icon'/>
                                            <span className="footer__item-text">{text}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>

                        <Form setModalActive={setModalActive}/>

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
