import React, { useState } from 'react';
import styles from '../styles/WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (activeCard === index) {
      setActiveCard(null); // Si ya está activa, la desactiva
    } else {
      setActiveCard(index); // Activa la tarjeta seleccionada
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <div
          className={`${styles.card} ${activeCard === 0 ? styles.active : ''}`}
          onClick={() => handleCardClick(0)}
        >
          <video className={styles.icon} autoPlay loop muted playsInline>
            <source src="/redes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {activeCard === 0 && (
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Demos</h3>
              <p className={styles.cardText}>
                Interactive demos for better understanding of our products.
              </p>
            </div>
          )}
        </div>

        <div
          className={`${styles.card} ${activeCard === 1 ? styles.active : ''}`}
          onClick={() => handleCardClick(1)}
        >
          <video className={styles.icon} autoPlay loop muted playsInline>
            <source src="/integraciones.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {activeCard === 1 && (
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Integration with platforms</h3>
              <p className={styles.cardText}>
                Seamless integration with multiple platforms and APIs.
              </p>
            </div>
          )}
        </div>

        <div
          className={`${styles.card} ${activeCard === 2 ? styles.active : ''}`}
          onClick={() => handleCardClick(2)}
        >
          <video className={styles.icon} autoPlay loop muted playsInline>
            <source src="/seguridad.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {activeCard === 2 && (
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Security</h3>
              <p className={styles.cardText}>
                Top-notch security features to protect your data.
              </p>
            </div>

            
          )}
        </div>

        
      </div>
    </div>
  );
};

export default WhyChooseUs;
