import React, { useState , useEffect } from 'react';
import { getCats } from './utilidades';
import './Gallery.css'

function Gallery() {

    const [cats, setCat] = useState([]);

    const initCats = () => {
        getCats().then((res) => {
            setCat(res);
        })
    }
    useEffect(() => { //Se llama al montarse el componente
        initCats();
    }, [])
    console.log(cats)

    return (
        <div>

            <ul className='container-images'>
                {
                    cats.map((cat, i) => {
                        return (
                            <li key={i}>
                                <img src={cat.img} alt='imagen gato'/>
                            </li>

                        )
                    })

                }
            </ul>


        </div>
    )
}

export default Gallery;