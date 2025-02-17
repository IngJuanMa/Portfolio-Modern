import React from 'react'
import { motion } from 'framer-motion';
import "./SobreMi.css"
import { FaReact } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { FaGlobe, FaFlagUsa } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";





const SobreMi = () => {
  return (
    <main className='c-sobremi'>
      <section className='historia'>
        <h1>About Me</h1>
        <h4 className='tituloinge'>Soy ingeniero agroindustrial y desarrollador front-end especializado en React + Vite.</h4>
        <p>
          Me encanta transformar ideas en sitios web funcionales y responsivos.
          Además, he trabajado en proyectos freelance diseñando plataformas para pequeños negocios,
          optimizando su presencia digital.
        </p>
        <div className='contenedorHabili'>
          <div className='habili'>
            <p className='infocard'>Diseño interfaces atractivas y funcionales con un enfoque en la usabilidad y la estética</p>
            <aside>Diseño Web</aside>
            <MdDesignServices color="#ED5F44" size={40} />
          </div>

          <div className='habili'>
            <p className='infocard'>Creo sitios web optimizados, interactivos y responsivos utilizando tecnologías modernas</p>
            <aside>Desarollo Web</aside>
            <IoCodeSlash color="#ED5F44" size={40} />
          </div>

          <div className='habili'>
            <p className='infocard'>Desarrollo identidades visuales sólidas para marcas, asegurando coherencia y diferenciación</p>
            <aside>Branding Web</aside>
            <FaRegLightbulb color="#ED5F44" size={40} />
          </div>
        </div>
      </section>


      <section className='idiomas'>
        <h3 className='h3'>Tecnologías</h3>
        <div>
          <div className='listatecnologías'>
            <li className='tecnología'>
              <aside>React</aside>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <FaReact className='logoreact' color="white" />
              </motion.div>
            </li>

            <li className="tecnología" >
              <aside>JS</aside>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <FaJsSquare className='logojs' color='white' />
              </motion.div>
            </li>

            <li className="tecnología">
              <aside>HTML</aside>
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <FaHtml5 className='logohtml' color='white' />
              </motion.div>
            </li>

            <li className="tecnología">
              <aside>Css</aside>
              <motion.div
                animate={{ x: [0, -5, 5, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}>
                <FaCss3Alt className='logocss' color='white' />
              </motion.div>
            </li>

            <li className="tecnología">
              <aside>Git</aside>
              <motion.dev
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <FaGitAlt className='logogit' color='white' />
              </motion.dev>
            </li>

            <li className="tecnología">
              <aside>F-Motion</aside>
              <motion.dev
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <SiFramer className='logoframer' color='white' />
              </motion.dev>
            </li>
          </div>
        </div>
        <h3 className='h3'>Idiomas</h3>
        <div className="idiomas-container">
          <div className="cardEspañol">
            <img src='/colombia.svg' className="icon espanol" />
            <h3>Español</h3>
            <p>Avanzado <br /> (Nativo) </p>
          </div>

          {/* Inglés */}
          <div className="cardIngles">
            <img src='/us.svg' className="icon ingles" />
            <h3>Inglés</h3>
            <p>Básico <br /> (En progreso)</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SobreMi;