import React, { useEffect, useState } from 'react';
import Slider from './Components/Slider';
import Gallery from './Components/Gallery';
import AgregarImagen from './Components/AgregarImagen';
import './App.css';
import { getCarrusel } from './Components/utilidades';



function App() {

  const [cats, setCat] = useState([]); //OK -> [cats, setCats] 

    const initCats = () => {
        getCarrusel().then((res) => {
            setCat(res);
        })
    }

    

    useEffect(() => { //Se llama al montarse el componente
        initCats();
    }, [])

  

  const [modal, setModal] = useState(false);


  const [page, setPage] = useState(() => {
    const { pathname } = window.location
    const page = pathname.slice(1)
    return page;
  });

  const getContent = () => {
    if (page === 'galeria') {
      return (
        <main>
          <div className='container-button'>
            <button className='button-galeria' onClick={() => setModal(!modal)}>Agregar</button>
          </div>
          <Gallery cats = {cats} />
          <AgregarImagen estado = {modal} setEstado = {setModal} />
        </main>
      )
    } else {
      return (
        <main>
          <Slider cats = {cats} setCat = {setCat} />
          <div className='container-button'>
            <a className='button-home' href='#' onClick={toPage('galeria')}> Agregar </a>

          </div>
        </main>
      )
    }
  }
  const toPage = page => event => {
    event.preventDefault()
    window.history.pushState(null, '', `/${page}`)
    setPage(page)
  }

  return (
    <div>
      <header>
        <div className='container-header'>
          <a className='button-header' href='#' onClick={toPage('home')}> Home </a>
        </div>
      </header>
      {getContent()}
    </div>
  )



}

export default App;
