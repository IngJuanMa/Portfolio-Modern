import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

const NavMenu = [
  { id: 1, titulo: "Inicio", link: "#Inicio" },
  { id: 2, titulo: "Sobre Mi", link: "#Sobre_Mi" },
  { id: 3, titulo: "Proyectos", link: "#Proyectos" },
  { id: 4, titulo: "Contacto", link: "#Contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Cierra el menú si se cambia a escritorio
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <motion.img
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7 }}
        src="/LogoJuan.png"
        alt="Logo"
        className="logo" />

      {/* Ícono de menú hamburguesa SOLO en pantallas pequeñas */}
      {isMobile && (
        <motion.div
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7 }}
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}>
          <RxHamburgerMenu className="menu-icon" />
        </motion.div>
      )}

      {/* Menú normal en pantallas grandes */}
      {!isMobile && (
        <motion.ul
          initial={{ x: 60 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6 }}
          className="listanav">
          {NavMenu.map((item, index) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={`lista ${index === NavMenu.length - 1 ? "highlight" : ""}`}
              >
                {item.titulo}
              </a>
            </li>
          ))}
        </motion.ul>
      )}

      {/* Menú desplegable en pantallas pequeñas */}
      {isMobile && menuOpen && (
        <motion.ul
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {NavMenu.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <a href={item.link} className="menu-item" onClick={() => setMenuOpen(false)}>
                {item.titulo}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
