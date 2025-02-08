import React from 'react'
import "./Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx";


const NavMenu = [
    {
        id: 1,
        titulo: "Home",
        link: "#",
    },
    {
        id: 2,
        titulo: "About Me",
        link: "#",
    },
    {
        id: 3,
        titulo: "Proyects",
        link: "#",
    },
    {
        id: 4,
        titulo: "Contact",
        link: "#",
    }
]
const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <img src='/LogoJuan.png' alt='Logo' className='logo'/>
                <ul className='listanav'>
                    {
                        NavMenu.map((item) => {
                            return (
                                <li key={item.id} >
                                    <a href={item.link} className='lista'>{item.titulo}</a>
                                </li>
                            );
                        })
                    }
                    <RxHamburgerMenu  className='menu'/>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;