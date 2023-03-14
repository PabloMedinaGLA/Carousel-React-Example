import React, { useState } from 'react';
import Slider from './Components/Slider';
import Gallery from './Components/Gallery';


function App() {

  const Home = () => <Slider />

  const Galeria = () => <Gallery />

  const [page, setPage] = useState('home');

  const getContent = () => {
    if (page === 'home') {
      return (
        <main>
          <Slider />
          <a href='#' onClick={toPage('galeria')}> Agregar </a>
        </main>
      )

    } else if (page === 'galeria') {
      return <Gallery />
    }
  }
  const toPage = page => event => {
    event.preventDefault()
    setPage(page)
  }

  return (
    <div>
      <header>
        <a href='#' onClick={toPage('home')}> Home </a>
      </header>
      {getContent()}
    </div>
  )



}

export default App;
