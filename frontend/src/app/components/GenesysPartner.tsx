import React from 'react';
import styles from '../styles/GenesysPartner.module.css';

const GenesysPartner = () => {
  const handlePurchaseClick = () => {
    window.location.href = 'https://appfoundry.genesys.com/filter/genesyscloud/listing/8fbf4e60-6ef9-4b24-83b7-2d4a8d62887c'; // Redirigir a la página de compra
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Columna izquierda: Texto */}
        <div className={styles.leftSection}>
          <h1 className={styles.title}>Get Feedback from Genesys AppFoundry</h1>
          <button className={styles.purchaseButton} onClick={handlePurchaseClick}>
            Purchase
          </button>
        </div>

        {/* Columna derecha: Logo y texto */}
        <div className={styles.rightSection}>
          <img src="/GenesysPartner.png" alt="Genesys Logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default GenesysPartner;
