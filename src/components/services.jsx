import React from 'react';

import finishing__svg from '../styles/img/svg/finishing.svg';
import house__svg from '../styles/img/svg/house.svg';
import electrician__svg from '../styles/img/svg/electrician.svg';
import plumbing__svg from '../styles/img/svg/plumbing.svg';

const servives = [
    {
        id: 0,
        title: 'Отделочные работы',
        img: finishing__svg,
        alt: 'finishing',
        list: [
            'Электромонтажные и сантехнические работы',
            'Демонтажные работы',
            'Штукатурные работы',
            'Малярные работы',
            'Монтаж ГКЛ',
            'Облицовка стен и потолков',
            'Укладка плитки',
            'Укладка всех видов наполных покрытий',
        ]
    },
    {
        id: 1,
        title: 'Строительство',
        img: house__svg,
        alt: 'house',
        list: [
            'Профессиональная укладка блоков ПГС',
            'Укладка кирпича',
            'Укладка пазогребневых плит',
            'Монтаж плит',
            'Монтаж перекрытий',
            'Монтаж балок и пермычек',
            'Изготовление монолитного пола',
            'Установка перегородок',
            'Установка вентиляционных каналов',
            'Кровельные работы любой сложности',
        ]
    },
    {
        id: 2,
        title: 'Электрика',
        img: electrician__svg,
        alt: 'electrician',
        list: [
            'Замена розеток и выключателей',
            'Перенос розеток и выключателей',
            'Замена электропроводки',
            'Сборка электросчетчиков',
            'Установка электросчетчиков',
        ]
    },
    {
        id: 3,
        title: 'Сантехника',
        img: plumbing__svg,
        alt: 'plumbing',
        list: [
            'Перенос и установка счетчиков',
            'Монтаж и ремонт водопровода',
            'Монтаж отопления и канализации',
            'Установка кранов',
            'Установка инсталляций',
            'Установка всех видов сантех оборудования',
            'Замена батарей отопления',
            'Замена и демонтаж радиатора отопления',
            'Замена труб в ванной и туалете',
            'Замена труб на пластиковые',
            'Монтаж трубопроводов ПВХ',
        ]
    }
]

function Services() {
    const [currentService, setCurrentService] = React.useState(0);
    
    const onHandleClickWorks = (id) => {
        setCurrentService(id);
    };

    return (
        <div id='services' className='services'>
            <div className="container">
                <h2 className="services__title">Наши услуги</h2>
                <div className="services__title-line" />
                <div className="services__inner">
                    <section className="services__works">
                        {
                            servives.map(({id, title, img, alt}) => (
                                <div className={`services__works-${id}`} 
                                    key={`${id}_${title}`}
                                    onClick={() => onHandleClickWorks(id)}
                                >
                                    <h3 className="services__works-title">{title}</h3>
                                    <img className="services__works-icon" src={img} alt={alt} />
                                </div>
                            ))
                        }
                    </section>
                    <section className="services__list">
                        <h3 className="services__list-title">{servives[currentService].title}</h3>
                        <ul>
                            {
                                servives[currentService].list.map((list, index) => (
                                    <li className="services__list-item" key={index}>- {list}</li>
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
