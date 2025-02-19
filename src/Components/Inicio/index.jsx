import React from 'react'
import "./Inicio.css"
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { motion } from 'framer-motion';


const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: -100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});


const Incio = () => {
    return (
        <>
            <main className='contenedor' id='Inicio'>
                <div
                    className='texto'>
                    <p> 👋 Hi, i'm Juan Manuel</p>
                    <h1 >Front-End</h1>
                    <motion.div className='textoborder'
                        variants={container(0.5)}
                        initial="hidden"
                        whileInView="show">
                        <h2 >Developer & Designer</h2>
                    </motion.div>
                    <motion.div
                        className='borde'
                        variants={container(0.7)}
                        initial="hidden"
                        whileInView="show"
                    >
                    </motion.div>
                </div>
                <img className='foto' src='/fotojuan.png' alt='FotoJuan' />
                <div className='listaredesboton'>
                    <div className='listaredes'>
                        <a href='https://www.linkedin.com/in/juan-manuel-castro-chavarro-9b0128262/'></a><FaLinkedin className='red' />
                        <a href='https://github.com/IngJuanMa'></a><FaGithub className='red' />
                        <a href='https://www.instagram.com/manuel.280/'></a><FaInstagram className='red' />
                    </div>
                    <h3 className='cv'> <FaCircleArrowLeft className='flecha' /> About Me</h3>
                </div>
            </main>
        </>
    )
}

export default Incio;