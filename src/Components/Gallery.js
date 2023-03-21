import React, { useState, useEffect } from 'react';
import { getGaleria } from './utilidades';
import './Gallery.css'
import axios from 'axios';

function Gallery({ cats }) {

    const [elements, setElements] = useState([]);

    const Elements = () => {
        getGaleria().then((res) => {
            setElements(res);
        })
    }
    useEffect(() => { //Se llama al montarse el componente
        Elements();
    }, [])

    async function MoveElement(cat) {
        await axios.post("http://localhost:3000/carrusel", cat)
    }

    const filterElements = elements.filter(function (item) {

        for (const e of cats) {

            if (item.id === e.id)
                return false;
        }
        
        return true

    })
    function viewFilterElements() {
        
        return filterElements.map((elements) => {
            return (
                <li onClick={() => MoveElement(elements)} key={elements.id}>
                    <img src={elements.url} alt='imagen gato' />
                </li>
            )
        })

    }
    
    

    return (
        <div>

            <ul className='container-images'>
                {
                    viewFilterElements()
                }
            </ul>


        </div>
    )
}

export default Gallery;