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


const SobreMi = () => {
  return (
    <main className='c-sobremi'>
      <section className='historia'>
        <h1>Sobre Mi</h1>
        <p>Soy ingeniero agroindustrial y desarrollador front-end especializado en React + Vite.
          Me encanta transformar ideas en sitios web funcionales y responsivos.
          Además, he trabajado en proyectos freelance diseñando plataformas para pequeños negocios,
          optimizando su presencia digital.
        </p>
        <h3>Tecnologías</h3>
        <div>
          <div className='listatecnologías'>
            <li className='tecnología'>
              <aside>React</aside>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <FaReact className='logoreact' color="#61DAFB" />
              </motion.div>
            </li>

            <li className="tecnología" >
              <aside>JS</aside>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <FaJsSquare className='logojs' color='#F7DF1E' />
              </motion.div>
            </li>

            <li className="tecnología">
              <aside>HTML</aside>
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <FaHtml5 className='logohtml' color='#E34F26' />
              </motion.div>
            </li>

            <li className="tecnología">
              <aside>Css</aside>
              <motion.div
                animate={{ x: [0, -5, 5, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}>
                <FaCss3Alt className='logocss' color='#1572B6' />
              </motion.div>
            </li>

            <li className="tecnología">
              <aside>Git</aside>
              <motion.dev
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <FaGitAlt className='logogit' color='#F05032' />
              </motion.dev>
            </li>

            <li className="tecnología">
              <aside>F-Motion</aside>
              <motion.dev
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <SiFramer className='logoframer' color='#E3008C' />
              </motion.dev>
            </li>
          </div>
        </div>
      </section>


      <section className='idiomas'>
        <h3 className='h3'>Idiomas</h3>
        <div className="idiomas-container">
          <div className="card">
            <img src='/colombia.svg' className="icon espanol" />
            <h3>Español</h3>
            <p>Avanzado <br /> (Nativo) </p>
          </div>

          {/* Inglés */}
          <div className="card">
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