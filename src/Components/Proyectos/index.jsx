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

      const IMGSARE = [
        "/Arre/arre1.jpg",
        "/Arre/arre2.jpg",
        "/Arre/arre3.jpg",
        "/Arre/arre4.jpg",
        "/Arre/arre5.jpg",
        "/Arre/arre1.jpg",
        "/Arre/arre2.jpg",
        "/Arre/arre3.jpg",
        "/Arre/arre4.jpg",
        "/Arre/arre5.jpg",
      ];

    return (
        <>
            <main className='c-proyects' id="Proyectos">
                <h1>Proyects</h1>
                <p>Aquí algunos de mis proyectos más relevantes</p>
                <section className='c-im-proyec'>
                    <div className='c-im-proyec-uni'>
                         <h2>Web Site Eco</h2>
                         <RollingGallery autoplay={false} pauseOnHover={true} IMGS={IMGS}/>
                         <p>Proyecto MPA desarrollado para una empresa dedicada a la producción y 
                            comercialización de productos de limpieza. Incluye carrito de compras 
                            para ventas por WhatsApp y responsive . </p>
                         <a href='https://langind-page-eco.vercel.app/' target="_blank" rel="noopener noreferrer">Ver este proyecto <IoIosArrowDroprightCircle /></a>
                    </div>

                    <div className='c-im-proyec-uni'>
                         <h2>Web Site AmiWool</h2>
                         <RollingGallery autoplay={false} pauseOnHover={true} IMGS={IMGSAMII}/>
                         <p>Proyecto MPA desarrollado para un negocio que se dedica generar productos hechos
                            a mano en Crochet. Contiene funciones para ventas por WhatssApp, diseño propio, 
                            optimizado para móviles. </p>
                         <a href='https://web-site-amii-wool.vercel.app/' target='blank' rel='noopener noreferrer'>Ver este proyecto <IoIosArrowDroprightCircle /></a>
                    </div>

                    <div className='c-im-proyec-uni'>
                         <h2>Alura Fit</h2>
                         <RollingGallery autoplay={false} pauseOnHover={true} IMGS={IMGSFIT}/>
                         <p>Plataforma SPA con temática de gimnasio, una plataforma de videos con categorías que obtiene 
                            los datos de una API simulada; permite agregar, eliminar y editar las cards de los videos. 
                            Responsive </p>
                         <a href='https://alura-fit.vercel.app/' target='blank' rel='noopener noreferrer'>Ver este proyecto <IoIosArrowDroprightCircle /></a>
                    </div>

                    <div className='c-im-proyec-uni'>
                         <h2>Arreboles Web-Site</h2>
                         <RollingGallery autoplay={false} pauseOnHover={true} IMGS={IMGSARE}/>
                         <p>Sitio web MPA desarrollado para un emprendimieno familiar de comidas rápidas. Web hecha para que los
                          usuarios puedan realizar pedidos por medio de WhatsApp y así dar más visibilidad al negocio. Optimizado 
                          para móviles *En Construcción* </p>
                         <a href='https://arreboles-web-site.vercel.app/' target='blank' rel='noopener noreferrer'>Ver este proyecto <IoIosArrowDroprightCircle /></a>
                    </div>
                    
                </section>

                
            </main>
        </>
    )
}

export default Proyects;