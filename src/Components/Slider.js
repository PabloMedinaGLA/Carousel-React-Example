import React, { useState } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from "./SliderContent";
import imageSlider from './ImageSlider';
import './Slider.css';

const len = imageSlider.length -1;

function Slider(props) {
    const [activeIndex,setActiveIndex] = useState(0);
    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} imageSlider = {imageSlider} />
            <Arrows
            prevSlide={()=> setActiveIndex(activeIndex < 1 ? len : activeIndex -1)}

            nextSlide={()=> setActiveIndex(activeIndex === len? 0 : activeIndex + 1)}
            />
            <Dots activeIndex={activeIndex} imageSlider = {imageSlider} onclick={activeIndex => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider;