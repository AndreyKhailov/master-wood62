import React from 'react';

import finishing__svg from '../styles/img/svg/finishing.svg';
import house__svg from '../styles/img/svg/house.svg';
import electrician__svg from '../styles/img/svg/electrician.svg';
import plumbing__svg from '../styles/img/svg/plumbing.svg';

const servivesList = [
    'Перенос и установка счетчиков',
    'Монтаж и ремонт водопровода',
    'Монтаж отопления',
    'Монтаж канализации',
    'Замена и перенос  полотенцесушителя',
    'Установка кранов на полотенцесушитель',
    'Установка инсталляций',
    'Установка всех видов сантех оборудования',
    'Замена батарей отопления',
    'Замена и демонтаж радиатора отопления',
    'Замена труб в ванной и туалете',
    'Замена труб в ванной',
    'Замена труб на пластиковые',
    'Монтаж трубопроводов ПВХ',
    'Замена и демонтаж радиатора отопления',
]



function Services() {
    return (
        <div className='services'>
            <div className="container">
                <h2 className="services__title">Наши услуги</h2>
                <div className="services__title-line" />
                <div className="services__inner">
                    <section className="services__works">
                        <div className="services__works-1">
                            <h3 className="services__works-title">Отделочные работы</h3>
                            <img className="services__works-icon" src={finishing__svg} alt="finishing" />
                        </div>
                        <div className="services__works-2">
                            <h3 className="services__works-title">Строительство</h3>
                            <img className="services__works-icon" src={house__svg} alt="house" />
                        </div>
                        <div className="services__works-3">
                            <h3 className="services__works-title">Электрика</h3>
                            <img className="services__works-icon" src={electrician__svg} alt="electrician" />
                        </div>
                        <div className="services__works-4">
                            <h3 className="services__works-title">Сантехника</h3>
                            <img className="services__works-icon" src={plumbing__svg} alt="plumbing" />
                        </div>
                    </section>
                    <section className="services__list">
                        <h3 className="services__list-title">Сантехника</h3>
                        <ul>
                            {
                                servivesList.map((item, index) => (
                                    <li className="services__list-item" key={index}>- {item}</li>
                                ))
                            }
                        </ul> 
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Services;
