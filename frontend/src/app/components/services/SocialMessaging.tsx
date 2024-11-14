import { useEffect } from 'react';
import styles from '../../styles/socialMessaging.module.css';
import WhatsAppPlatform from '../../components/services/WhatsAppPlatform';
import FacebookPlatform from '../../components/services/FacebookPlatform'
import InstagramPlatform from '../../components/services/InstagramPlatform';
import LinkedinPlatform from '../../components/services/LinkedinPlatform';
import XPlatform from '../../components/services/XPlatform';
import ScrollToTop from '../../components/ScrollToTop';

const SocialMessaging = () => {
  useEffect(() => {
    const items = document.querySelectorAll(`.${styles['platform-item']}`);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show); // Agrega la clase 'show' cuando la tarjeta entra en el viewport
          observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
        }
      });
    }, { threshold: 0.2 }); // Se activa cuando el 20% del elemento es visible

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (

    <>
      <WhatsAppPlatform />
      <FacebookPlatform />
      <InstagramPlatform/>
      <LinkedinPlatform/>
      <XPlatform/>


      <div
        className={styles['social-messaging-container']}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div style={{ padding: '20px', borderRadius: '8px' }}>
          <div className={styles['platform-container']}>
            {/* Aquí agregas el componente WhatsAppPlatform */}





            {/* <div className={styles['platform-item']}>
          
           
          <div className={styles['platform-item']}>
            <h3>Twitter</h3>
            <p>
              Integration with Twitter through the Genesys Cloud API allows the
              management of direct messages and mentions. Support agents can
              manage customer requests, set up automatic responses
              and track brand mentions in real time, ensuring
              Quick response to problems and comments from users on the network.
            </p>
          </div>
          <div className={styles['platform-item']}>
          */}
          </div>
        </div>
      </div>
      <ScrollToTop/>
    </>
  );
};

export default SocialMessaging;
