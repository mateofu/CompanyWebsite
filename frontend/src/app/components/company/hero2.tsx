// hero2.tsx
import React from 'react';
import styles from '../../styles/hero2.module.css'; // Importa los estilos desde hero2.module.css

const Hero2: React.FC = () => {
  return (
    <div className={styles['hero-container']}>
      <div className={styles['hero-left']}>
        <h1>Apifycloud</h1>
      </div>

      <div className={styles['hero-right']}>
        <p>
          Our services are designed to simplify API consumption, allowing companies to seamlessly integrate with the platforms they rely on. We focus on delivering scalable, reliable services that enhance the efficiency and adaptability of businesses. Whether it's connecting with third-party systems or automating processes, our solutions are built to provide the convenience and flexibility that modern enterprises need.
        </p>
      </div>
    </div>
  );
};

export default Hero2;
