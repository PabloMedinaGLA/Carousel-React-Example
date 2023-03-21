import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from "./SliderContent";
import './Slider.css';
import { getCarrusel } from './utilidades';

function Slider({cats, setCats}) {
    const [activeIndex,setActiveIndex] = useState(0);

    if (!cats.length) {
        return (
            <div className='slider-container'>
                <h1 id='no-found'>No imagenes registradas</h1>
                <Arrows />
            </div>
        )
    }
        
    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} imageSlider = {cats} />
            <Arrows
            prevSlide={()=> setActiveIndex(activeIndex < 1 ? cats?.length - 1 : activeIndex -1)}

            nextSlide={()=> setActiveIndex(activeIndex === cats?.length - 1? 0 : activeIndex + 1)}
            />
            <Dots activeIndex={activeIndex} imageSlider={cats} onClick={activeIndex => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider;