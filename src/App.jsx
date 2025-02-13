import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Incio from './Components/Inicio'
import SobreMi from './Components/SobreMi'
import Proyects from './Components/Proyectos'

const App = () => {
  return (
    <main>
      <Navbar />
      <Incio/>
      <SobreMi />
      <Proyects />
    </main>
  )
}

export default App;