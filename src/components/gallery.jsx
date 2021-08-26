import React from 'react';

import building__jpg from '../styles/img/building.jpg';
import interior__jpg from '../styles/img/interior.jpg';
import ladder__jpg from '../styles/img/ladder.jpg';
import outsideworks__jpg from '../styles/img/outsideworks.jpg';
import insideworks__jpg from '../styles/img/insideworks.jpg';
import otherworks__jpg from '../styles/img/otherworks2.webp';

const dataGallery = [
    {
        id: 1,
        text: 'Строительство домов, беседок, бань и т.д. из дерева и других строительных материалов',
        label: 'Строительство',
        img: building__jpg,
        alt: 'building picture',
    },
    {
        id: 2,
        text: 'Изготовлеине различных элементов интерьера таких: стулья, столы, шкафы, полки и т.д.',
        label: 'Интерьер',
        img: interior__jpg,
        alt: 'interior picture',
    },
    {
        id: 3,
        text: 'Проектирование и создание различных видов лестниц из дерева и металла',
        label: 'Лестницы',
        img: ladder__jpg,
        alt: 'ladder picture',
    },
    {
        id: 4,
        text: 'Осуществление внешней отделки домов и построек из различных строительных материалов',
        label: 'Внешняя отделка',
        img: outsideworks__jpg,
        alt: ' outsideworks picture',
    },
    {
        id: 5,
        text: 'Осуществление внутренней отделки домов и построек из различных строительных материалов',
        label: 'Внутренняя отделка',
        img: insideworks__jpg,
        alt: 'insideworks picture',
    },
    {
        id: 6,
        text: 'Большое разнообразие монтажных, сантехнических работ и работ связанных с электричеством',
        label: 'Монтаж',
        img: otherworks__jpg,
        alt: 'Other works picture',
    },
]

function Gallery() {
    return (
        <div className='gallery'>
            <div className="container">
                <h2 className="gallery__title">Галерея работ</h2>
                <div className="services__title-line" />
                <div className="gallery__sections">
                    {
                        dataGallery.map(({id, text, label, img, alt}) => (
                            <div className="gallery__section" key={id}>
                                <figure data-category={label}>
                                    <img src={img} alt={alt} />
                                </figure>
                                <div className="gallery__discription-img">
                                    <h5>{text}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery;
