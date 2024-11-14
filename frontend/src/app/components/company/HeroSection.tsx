import React from 'react';
import styles from '../../styles/HeroSection.module.css'; // Asegúrate de crear este archivo de CSS

const HeroSection = () => {
  return (
    <div className={styles['hero-section']}>
      <div className={styles['hero-content']}>
        {/* Columna izquierda con título y botones */}
        <div className={styles['hero-left']}>
          <h1>A better way to integrate with APIs</h1>
        </div>
        {/* Columna derecha con descripción */}
        <div className={styles['hero-right']}>
          <p>
            Our services is designed to simplify API consumption, allowing companies to seamlessly integrate with the platforms they rely on. We focus on delivering scalable, reliable services that enhance the efficiency and adaptability of businesses. Whether it's connecting with third-party systems or automating processes, our solutions are built to provide the convenience and flexibility that modern enterprises need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
