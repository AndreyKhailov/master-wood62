import React from 'react';

const aboutDataArr = [
    [
        'Качественное проведение работ',
        'Обсуждение работы на каждом этапе',
        'Профессиональный инструмент',
        'Большой опыт работы',
        'Доступные цены',
    ],
    [
        'более',
        '10',
        'лет опыта',
    ],

]

function About() {
    return (
        <div id="about" className='about'>
            <div className='container'>
                <div className='about__inner'>
                    <div className='about__text'>
                        <h2 className='about__text-title'>О нас</h2>
                        <ul>
                            {
                                aboutDataArr[0].map((text, index) => (
                                    <li className='about__text-item' key={index}>{text}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='about__circle'>
                        {
                            aboutDataArr[1].map((info, index) => (
                                <div className='about__info-item' key={`${info}_${index}`}>{info}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
