import React,{useState,useEffect} from "react";
import { getGaleria } from './utilidades';
import axios from "axios";
import './AgregarImagen.css';

const AgregarImagen = ({estado,setEstado}) => {

    const [dato,setDato] = useState({
        id: '',
        url: ''
    });

    const handleInputChange = (event) => {
        const {value,name} = event.target
        setDato(prev => ({
            ...prev,
            [name] : value
        }))
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/galeria",{
            ...dato
        })
    }

    return (
        <>
            {estado &&
            <div className="container">
                <form className="contenedor-form" onSubmit={enviarDatos}>
                    <button id="boton-cerrar" onClick={() => setEstado(!estado)}>X</button>
                    <label>Agregar Imagen</label>
                    <input 
                    id="POST-url" 
                    type="text" 
                    name="url" 
                    placeholder="Url" 
                    onChange={handleInputChange}
                    />
                    <button id="POST-submit" type="submit">Añadir</button>
                </form>
            </div>
            }
        </>
    );

}

export default AgregarImagen;