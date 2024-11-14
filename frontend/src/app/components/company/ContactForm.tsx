import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios'; // Para hacer la solicitud POST al backend
import styles from '../../styles/contactForm.module.css'; // Ruta hacia tu archivo CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    conociste: '',
    empresa: '',
    correo: '',
    telefono: '',
    motivo: '',
    mensaje: '',
    aceptarComunicaciones: false,
    aceptarDatos: false,
  });

  // Declaramos captchaToken como string o null
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (e.target instanceof HTMLInputElement && type === 'checkbox') {
      // Si es un checkbox, usa el valor de 'checked'
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      // Para todos los demás tipos de entrada (text, textarea, etc.), usa el 'value'
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCaptcha = (token: string | null) => {
    setCaptchaToken(token); // Almacenar el token de reCAPTCHA cuando es resuelto
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!captchaToken) {
      alert('Por favor, completa el CAPTCHA');
      return;
    }
  
    try {
      // Enviar los datos del formulario y el token de reCAPTCHA al backend
      const response = await axios.post('http://localhost:4001/api/v1/contact', {
        ...formData,
        'g-recaptcha-response': captchaToken,  // Incluir el token de reCAPTCHA
      });
  
      if (response.status === 200) {
        alert('Formulario enviado correctamente');
      } else {
        alert('Error al enviar el formulario, inténtalo de nuevo');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario.');
    }
  };
  

  return (
    <div className={styles['main-container']}>
      {/* Imagen con el texto encima */}
      <div className={styles['image-container']}>
        <div className={styles['image-text-container']}>
          <h1 className={styles['image-title']}>Let’s talk!</h1>
          <p className={styles['image-subtitle']}>Leave us your comments</p>
          <img src="/infocontact.jpg" alt="contact form illustration" className={styles['contact-image']} />
        </div>
      </div>

      {/* Formulario */}
      <div className={styles['form-container']}>
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="nombre">Name*</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Name"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="apellido">Last Name*</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Last Name"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="empresa">Company*</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              placeholder="empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="correo">Email*</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="@"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="telefono">Phone*</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Phone Number"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${styles['form-group']} ${styles['form-group-full']}`}>
            <label htmlFor="conociste">How did you hear about Apifycloud*</label>
            <select id="conociste" name="conociste" value={formData.conociste} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Parther">Parther</option>
            </select>
          </div>

          <div className={`${styles['form-group']} ${styles['form-group-full']}`}>
            <label htmlFor="motivo">Select the reason for your inquiry*</label>
            <select id="motivo" name="motivo" value={formData.motivo} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="General Information Request">General Information Request</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className={`${styles['form-group']} ${styles['form-group-full']}`}>
            <label htmlFor="mensaje">Your inquiry or comments*</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="write to us ..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className={`${styles['form-group']} ${styles['checkbox']}`}>
            <label>
              <input
                type="checkbox"
                name="aceptarDatos"
                checked={formData.aceptarDatos}
                onChange={handleChange}
                required
              />
              I agree to allow Apifycloud to store and process my personal data.*
            </label>
          </div>

          {/* Agregar reCAPTCHA */}
          <div className={styles['form-group']}>
            <ReCAPTCHA
              sitekey="6LfsmkgqAAAAANKAbsXAcw270Ma5hhz0_j1ZOb9h" // Reemplaza con tu clave de sitio de Google reCAPTCHA
              onChange={handleCaptcha} // Manejar el token cuando el CAPTCHA es resuelto
            />
          </div>

          <div className={styles['form-group']}>
            <button type="submit" className={styles['submit-button']}>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
