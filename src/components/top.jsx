import React from 'react';

function Top() {
    return (
        <div className='top'>
            <div className='container'>
                <div className='top__inner'>
                    <div className='top__title'>
                        <h1 className='top__title-1'>Мастерская</h1> 
                        <h2 className='top__title-2'>строительства</h2>
                        <h3 className='top__title-3'>
                            <span className='top__title-4'>и</span> столярных 
                            <span className='top__title-5'>работ</span>
                        </h3>
                        <h4 className='top__title-6'>г. Рязань</h4>
                        <span className='top__title-text'>Качество / Надежность / Своевременность</span>
                    </div>
                    <div className='top__blocks'>
                        <div className='top__block-1'>
                            <h4>Строительство:</h4>
                            <p>
                                <span className='top__block-item'>домов</span>
                                <span className='top__block-item'>бань</span>
                                <span className='top__block-item'>беседок</span>
                                <br />
                                <span className='top__block-item'>навесов</span>
                                <span className='top__block-item'>лестиниц</span>
                                <br /><br />
                                <span className='top__block-item'>Отделочные работы</span>
                                <br />
                                <span className='top__block-item'>Монтажные работы</span>
                            </p>
                        </div>
                        <div className='top__block-2'>
                            <h4>Изготовлеине:</h4>
                            <p>
                                <span className='top__block-item'>столов</span>
                                <span className='top__block-item'>стульев</span>
                                <span className='top__block-item'>тубм</span>
                                <br />
                                <span className='top__block-item'>скамеек</span>
                                <span className='top__block-item'>шкафов</span>
                                <br />
                                <span className='top__block-item'>любых изделий из дерева</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;
