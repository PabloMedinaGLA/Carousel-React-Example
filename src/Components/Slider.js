import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from "./SliderContent";
import './Slider.css';
import { getCats } from './utilidades';

function Slider(props) {
    const [activeIndex,setActiveIndex] = useState(0);
    const [cats, setCat] = useState([]); //OK -> [cats, setCats] 

    const initCats = () => {
        getCats().then((res) => {
            setCat(res);
        })
    }

    const len = cats?.length - 1;

    useEffect(() => { //Se llama al montarse el componente
        initCats();
    }, [])

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
            prevSlide={()=> setActiveIndex(activeIndex < 1 ? len : activeIndex -1)}

            nextSlide={()=> setActiveIndex(activeIndex === len? 0 : activeIndex + 1)}
            />
            <Dots activeIndex={activeIndex} imageSlider={cats} onclick={activeIndex => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider;