import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Incio from './Components/Inicio'
import SobreMi from './Components/SobreMi'
import Proyects from './Components/Proyectos'
import Contact from './Components/Contact'

const App = () => {
  return (
    <main>
      <Navbar />
       <Incio />
      <SobreMi />
      <Proyects />
      <Contact /> 
    </main>
  )
}

export default App;