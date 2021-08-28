import React from 'react';

import { arrOfImg } from './forSliderArr';

import btnClose__svg from '../../styles/img/svg/btnClose.svg';
import arrow__svg from '../../styles/img/svg/rightArrow.svg';

function Slider({ id, isOpenSlider, isActiveSlider}) {
    const [x, setX] = React.useState(0); // view current slide

    const onCloseSlider = () => {
        isActiveSlider(false);
        setX(0);
    };

    const backSlide = () => {
        x === 0 ? setX(-100 * (arrOfImg[id].length - 2)) : setX(x + 35);
    };

    const nextSlide = () => {
        x === -100 * (arrOfImg[id].length - 2) ? setX(0) : setX(x - 35);
    };

    return (
        <div className={`slider__wrapper ${isOpenSlider ? 'open' : 'close'}` }>
            <button 
                className='slider__btn-close'
                onClick={onCloseSlider}
            >
                <span className="slider__btn-title">Закрыть</span>
                <img className="slider__btn-icon" src={btnClose__svg} alt='button close slider' />
            </button>
             <div className="slider__body">
                <section className='slider__slide' style={{ transform: `translateX(${x}%)` }}>
                    {
                        arrOfImg[id].map((img, index) => (
                            <img className="slider__slide-img" key={index} src={img} alt='gallery' />
                        )) 
                    }            
                </section>
                <button 
                    className='slider__btn-ctrl-left'
                    onClick={backSlide}
                >
                    <img className='slider__svg-left' src={arrow__svg} alt='back slide'/>
                </button>
                <button 
                    className='slider__btn-ctrl-right'
                    onClick={nextSlide}
                >
                    <img className='slider__svg-right' src={arrow__svg} alt='next slide'/>
                </button>
            </div>
        </div>
    )
}

export default Slider;
