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
        x: 100,
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
                    <motion.p
                        variants={container(0.2)}
                        initial="hidden"
                        whileInView="show"> 👋 Hi, i'm Juan Manuel</motion.p>
                    <motion.h1
                        variants={container(0.3)}
                        initial="hidden"
                        whileInView="show">Front-End</motion.h1>
                    <motion.div className='textoborder'
                        variants={container(0.5)}
                        initial="hidden"
                        whileInView="show">
                        <h2 >Developer & Designer</h2>
                    </motion.div>
                    <motion.div
                        className='borde'
                        variants={container(0.8)}
                        initial="hidden"
                        whileInView="show"
                    >
                    </motion.div>
                </div>

                <motion.img
                    initial={{ x: -30 }}
                    whileInView={{ x: -160 }}
                    transition={{ duration: 0.6 }}
                    className='foto'
                    src='/fotojuan.png'
                    alt='FotoJuan'
                />

                <div className='listaredesboton'>
                    <div className='listaredes'>
                        <motion.a
                            href='https://www.linkedin.com/in/juan-manuel-castro-chavarro-9b0128262/'
                            target="_blank" rel="noopener noreferrer"
                            initial={{ x: -30 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.6 }}>
                            <FaLinkedin className='red' />
                        </motion.a>

                        <motion.a
                            href='https://github.com/IngJumotion.anMmotion.a'
                            target="_blank" rel="noopener noreferrer"
                            initial={{ x: -30 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.8 }}>
                            <FaGithub className='red' />
                        </motion.a>

                        <motion.a
                            href='https://www.instagram.com/manuel.280/'
                            target="_blank" rel="noopener noreferrer"
                            initial={{ x: -30 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1 }}>
                            <FaInstagram className='red' />
                        </motion.a>
                    </div>
                    <h3 className='cv'> <FaCircleArrowLeft className='flecha' /> About Me</h3>
                </div>
            </main>
        </>
    )
}

export default Incio;