import React from 'react';
import styles from '../styles/featureCard2.module.css';

interface FeatureCard2Props {
  title: string;
  description: string;
  backgroundImage: string;
  backgroundColor: string;
}

const FeatureCard2: React.FC<FeatureCard2Props> = ({ title, description, backgroundImage, backgroundColor }) => {
  const descriptionList = description.split('\n').filter(line => line.trim() !== '');

  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <img src={backgroundImage} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle} style={{ color: title }}>{title}</h2>
        <ul className={styles.cardDescription}>
          {descriptionList.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureCard2;
