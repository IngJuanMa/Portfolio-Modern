import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Incio from './Components/Inicio'
import SobreMi from './Components/SobreMi'

const App = () => {
  return (
    <main>
      <Navbar />
      <Incio/>
      <SobreMi />
    </main>
  )
}

export default App;