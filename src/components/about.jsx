import React from 'react';

function About() {
    return (
        <div className='about'>
            <div className='container'>
                <div className='about__inner'>
                    <div className='about__text'>
                        <h2 className='about__text-title'>О нас</h2>
                        <ul>
                            <li className='about__text-item'>Качественное проведение работ</li>
                            <li className='about__text-item'>Обсуждение работы на каждом этапе</li>
                            <li className='about__text-item'>Профессиональный инструмент</li>
                            <li className='about__text-item'>Большой опыт работы</li>
                            <li className='about__text-item'>Доступные цены</li>
                        </ul>
                    </div>
                    <div className='about__circle'>
                        <div className='about__info-item'>более</div>
                        <div className='about__info-item'>10</div>
                        <div className='about__info-item'>лет опыта</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
