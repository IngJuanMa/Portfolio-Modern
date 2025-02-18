import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact-section" id="Contacto">
      <div className="contact-content">
        <h2 className="contact-title">Contáctame</h2>
        <p className="contact-description">
          ¿Tienes una idea? <br /> ¡Trabajemos juntos! Escríbeme y hagámosla realidad
        </p>
        <form 
          className="contact-form"
          action="https://formsubmit.co/kinghalito123@gmail.com" 
          method="POST"
        >
          {/* Campos ocultos para configuración */}
          <input type="hidden" name="_next" value="https://tuweb.com/gracias.html" />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Enviar
          </button>
        </form>
      </div>
      <div className="s-foto">
        <img src='/juandos.png' className="fotofinal" />
      </div>
    </section>
  );
};

export default Contact;
