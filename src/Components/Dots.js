import React from 'react';

function Dots({ activeIndex, onClick, imageSlider }) {
    //imagenSlider -> es el array con objectos 
    return (
        <div className='all-dots'>
            {imageSlider && imageSlider?.map((slide, index) => (
                <span key={index} className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onClick(index)}
                ></span>
            ))}
        </div>
    )
}

export default Dots;