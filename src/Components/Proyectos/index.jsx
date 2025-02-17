import React from 'react';
import "./Proyectos.css";
import RollingGallery from '../Galery';
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Proyects = () => {


    const IMGS = [
        "/eco/eco.png",
        "/eco/eco1.png",
        "/eco/eco2.jpg",
        "/eco/eco3.jpg",
        "/eco/eco4.jpg",
        "/eco/eco5.jpg",
        "/eco/eco6.jpg",
        "/eco/eco7.jpg",
        "/eco/eco8.jpg",
        "/eco/eco2.jpg",
      ];
    
      const IMGSAMII = [
        "/amii/ami1.png",
        "/amii/ami2.jpg",
        "/amii/ami3.jpg",
        "/amii/ami4.jpg",
        "/amii/ami5.jpg",
        "/amii/ami6.jpg",
        "/amii/ami.jpg",
        "/amii/ami1.png",
        "/amii/ami2.jpg",
        "/amii/ami3.jpg",
      ];

      const IMGSFIT = [
        "/fit/alura.jpg",
        "/fit/alura1.jpg",
        "/fit/alura2.jpg",
        "/fit/alura3.jpg",
        "/fit/alura4.jpg",
        "/fit/alura5.jpg",
        "/fit/alura6.jpg",
        "/fit/alura.jpg",
        "/fit/alura2.jpg",
        "/fit/alura3.jpg",
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
                         <RollingGallery autoplay={false} pauseOnHover={true} IMGS={IMGSAMII}/>
                         <p>Proyecto desarrollado para un negocio que se dedica generar productos hechos
                            a mano en Crochet. Contiene funciones para ventas por WhatssApp, diseño propio, 
                            responsivo. </p>
                         <a>Ver este proyecto <IoIosArrowDroprightCircle /></a>
                    </div>

                    <div className='c-im-proyec-uni'>
                         <h2>Alura Fit</h2>
                         <RollingGallery autoplay={false} pauseOnHover={true} IMGS={IMGSFIT}/>
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