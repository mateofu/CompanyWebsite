"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/suscribe';
import ContactInfo from '@/app/components/company/ContactInfo';
import styles from '../../styles/ContactSection.module.css';
import ContactForm from '@/app/components/company/ContactForm';

const Page = () => {

  // Función para desplazamiento suave al inicio de la página
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave hacia el tope de la página
    });
  };

  return (
    <>
      <Navbar />
      <ContactForm />
      
      {/* Sección de contacto */}
      <div className={styles['contact-section']}>
        <div className={styles['contact-header']}>
          <button className={styles['contact-button']} onClick={handleScrollToTop}>
            Get In Touch
          </button>
          <h1>Contact With US</h1>
          <p>Let’s start a conversation, we will be contacting you soon</p>
        </div>
      </div>

      <ContactInfo />
      <Subscribe />
    </>
  );
};

export default Page;
