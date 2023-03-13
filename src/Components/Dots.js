import React from 'react';

function Dots({activeIndex, onclick, imagenSlider}) {
    //imagenSlider -> es el array con objectos 
    return <div className='All-dots'>
        {imagenSlider && imagenSlider?.map((slide, index) => (
            <span key={index} className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                onclick={() => onclick(index)}
            ></span>
        ))}
    </div>
}

export default Dots;