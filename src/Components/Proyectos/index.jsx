import React from 'react'
import "./Proyectos.css"
import RollingGallery from '../Galery';
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Proyects = () => {


    const IMGS = [
        "/3.png",
        "/1.png",
        "/2.png",
        "/Oporapa.png",
        "/3.png",
        "/1.png",
        "/3.png",
        "/1.png",
        "/2.png",
        "/Oporapa.png",
      ];

    return (
        <>
            <main className='c-proyects'>
                <h1>Proyects</h1>
                <p>Aquí algunos de mis proyectos más relevantes</p>
                <section className='c-im-proyec'>
                    <div className='c-im-proyec-uni'>
                         <h2>Web Site Eco</h2>
                         <RollingGallery autoplay={false} pauseOnHover={true} IMGS={IMGS}/>
                         <p>Proyecto desarrollado para una empresa dedicada a la producción y 
                            comercialización de productos de limpieza. Incluye carrito de compras 
                            para ventas por WhatsApp y responsive. </p>
                         <a>Ver este proyecto <IoIosArrowDroprightCircle /></a>
                    </div>

                    <div className='c-im-proyec-uni'>
                         <h2>Web Site AmiWool</h2>
                         <RollingGallery autoplay={true} pauseOnHover={true} IMGS={IMGS}/>
                         <p>Proyecto desarrollado para un negocio que se dedica generar productos hechos
                            a mano en Crochet. Contiene funciones para ventas por WhatssApp, diseño propio, 
                            responsivo. </p>
                         <a>Ver este proyecto <IoIosArrowDroprightCircle /></a>
                    </div>

                    <div className='c-im-proyec-uni'>
                         <h2>Alura Fit</h2>
                         <RollingGallery autoplay={false} pauseOnHover={true} IMGS={IMGS}/>
                         <p>Plataforma con temática de gimnasio, una plataforma de videos con categorías que obtiene 
                            los datos de una API simulada; permite agregar, eliminar y editar las cards de los videos. </p>
                         <a>Ver este proyecto <IoIosArrowDroprightCircle /></a>
                    </div>
                    
                </section>
            </main>
        </>
    )
}

export default Proyects;