import React from 'react'
import "./Proyectos.css"
import RollingGallery from '../Galery';
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Proyects = () => {


    const IMGS = [
        "/3.png",
        "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                         <RollingGallery autoplay={false} pauseOnHover={true} IMGS={IMGS}/>
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