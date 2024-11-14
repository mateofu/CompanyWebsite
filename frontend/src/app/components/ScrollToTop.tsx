import React, { useState, useEffect } from 'react';
import styles from '../styles/ScrollToTop.module.css';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div
      className={styles.scrollToTop}
      onClick={scrollToTop}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <img src="/flecha.png" alt="Go to top" />
    </div>
  );
};

export default ScrollToTop;
