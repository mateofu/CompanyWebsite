import React from 'react';
import styles from '../../styles/ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <img src="/map.png" alt="Location Icon" />
        </div>
        <h3 className={styles.infoTitle}>Location</h3>
        <p className={styles.infoText}>1424 NE Miami Place, Miami, FL 33132</p>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <img src="/mail.png" alt="Email Icon" />
        </div>
        <h3 className={styles.infoTitle}>Email</h3>
        <p className={styles.infoText}>sales@apifycloud.com</p>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <img src="/phone.png" alt="Phone Icon" />
        </div>
        <h3 className={styles.infoTitle}>Phone</h3>
        <p className={styles.infoText}>+1 7869994920</p>
      </div>
    </div>
  );
};

export default ContactInfo;
