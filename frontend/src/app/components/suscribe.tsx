import React from 'react';
import styles from '../styles/suscribe.module.css';

const Subscribe = () => {
  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.logoSection}>
        <h2>ApifyCloud</h2>
        <p>© 2024 ApifyCloud Inc.</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/apifycloud?_rdc=1&_rdr"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="https://www.instagram.com/apifycloud/"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/company/apifycloud/posts/?feedView=all"><img src="/linkedin.png" alt="LinkedIn" /></a>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <h3>Products</h3>
            <a href="#">Social Messaging</a>
            <a href="#">SMS Campaigns</a>
            <a href="#">Video / Chat Bots</a>
            <a href="#">Click To Call</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Contac Us</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
