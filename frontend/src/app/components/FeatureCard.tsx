import React from 'react';
import styles from '../styles/featureCard2.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, backgroundImage }) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />      </div>
    </div>
  );
};

export default FeatureCard;
