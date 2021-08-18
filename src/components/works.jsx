import React from 'react';

function Works() {
    return (
        <div className='works'>
            <div className="container">
                    <h2 className="works__titile">Как мы работаем</h2>
                <div className="works__inner">
                    <div className='works__line-right'/>
                    <div className='works__line-left' />
                    <div className="works__section-1">
                        <span className="works__section-num">01</span>
                        <p className="works__section-text">Бесплатный выезд мастера на объект для оценки работы </p>
                    </div>
                    <div className="works__section-2">
                        <span className="works__section-num">02</span>
                        <p className="works__section-text">Обсуждение работы с заказчиком </p>
                    </div>
                    <div className="works__section-3">
                        <span className="works__section-num">03</span>
                        <p className="works__section-text">Оформление и подписание договора</p>
                    </div>
                    <div className="works__section-4">
                        <span className="works__section-num">04</span>
                        <p className="works__section-text">Выполнение работ в соответствии с пожеланиями заказчика</p>
                    </div>
                    <div className="works__section-5">
                        <span className="works__section-num">05</span>
                        <p className="works__section-text">Прием работы заказчиком и окончательный расчет</p>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Works;
