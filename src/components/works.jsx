import React from 'react';

const worksDataArr = [
    {
        id: 1,
        num: '01',
        text: 'Выезд мастера на объект для оценки работы',
    },
    {
        id: 2,
        num: '02',
        text: 'Обсуждение оказываемых услуг с заказчиком',
    },
    {
        id: 3,
        num: '03',
        text: 'Предоставление проекта и плана работ',
    },
    {
        id: 4,
        num: '04',
        text: 'Выполнение работ в соответствии с пожеланиями заказчика',
    },
    {
        id: 5,
        num: '05',
        text: 'Прием работы заказчиком и окончательный расчет',
    },
]

function Works() {
    return (
        <div id='works' className='works'>
            <div className="container">
                    <h2 className="works__titile">Как мы работаем</h2>
                <div className="works__inner">
                    <div className='works__line-right'/>
                    <div className='works__line-left' />
                    {
                        worksDataArr.map(({ id, num, text }) => (
                            <div className={`works__section-${id}`} key={id}>
                                <span className="works__section-num">{num}</span>
                                <p className="works__section-text">{text}</p>
                            </div>
                        ))
                    }
                </div>                
            </div>
        </div>
    )
}

export default Works;
