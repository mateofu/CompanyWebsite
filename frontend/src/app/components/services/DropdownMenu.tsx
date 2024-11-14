import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/DropdownMenu.module.css'; // Archivo CSS separado

const DropdownMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Manejador para abrir el menú
  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Cancelar el temporizador de cierre si el cursor vuelve a entrar
      setTimeoutId(null);
    }
    setIsMenuOpen(true);
  };

  // Manejador para cerrar el menú con retraso
  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200); // Añade un retraso de 200ms o el tiempo que prefieras
    setTimeoutId(id);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdownLinkWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link color="foreground" href="" className={styles.dropdownLink}>
          Products ⌄
        </Link>

        {isMenuOpen && (
          <div
            className={styles.dropdownMenu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className={`${styles.menuList} ${styles.multiColumn}`}>
              
              <li className={styles.menuItem}>
                <Link href="/apifycloud/social" className={styles.fullLink}>
                  <div className={styles.menuIcon}><img src="/chat.png" alt="Customers Icon" /></div>
                  <div className={styles.menuContent}>
                    <h3 className={styles.menuTitle}>Social Messaging</h3>
                    <p>The teams we empower</p>
                  </div>
                </Link>
              </li>

              <li className={styles.menuItem}>
                <Link href="/apifycloud/sms" className={styles.fullLink}>
                  <div className={styles.menuIcon}><img src="/sms2.png" alt="Careers Icon" /></div>
                  <div className={styles.menuContent}>
                    <h3 className={styles.menuTitle}>Campaigns</h3>
                    <p>Help us build the cutting</p>
                  </div>
                </Link>
              </li>

              <li className={styles.menuItem}>
                <Link href="/apifycloud/video" className={styles.fullLink}>
                  <div className={styles.menuIcon}><img src="/video1.png" alt="About Icon" /></div>
                  <div className={styles.menuContent}>
                    <h3 className={styles.menuTitle}>Video Call</h3>
                    <p>Data Platform Developers</p>
                  </div>
                </Link>
              </li>

              <li className={styles.menuItem}>
                <Link href="/apifycloud/media" className={styles.fullLink}>
                  <div className={styles.menuIcon}><img src="/bot.png" alt="About Icon" /></div>
                  <div className={styles.menuContent}>
                    <h3 className={styles.menuTitle}>Chat Bots</h3>
                    <p>Data Platform Developers</p>
                  </div>
                </Link>
              </li>

              

              <li className={styles.menuItem}>
                <Link href="/apifycloud/click" className={styles.fullLink}>
                  <div className={styles.menuIcon}><img src="/llamada-saliente.png" alt="About Icon" /></div>
                  <div className={styles.menuContent}>
                    <h3 className={styles.menuTitle}>Click To Call</h3>
                    <p>Data Platform Developers</p>
                  </div>
                </Link>
              </li>

              <li className={styles.menuItem}>
                <Link href="/apifycloud/crm" className={styles.fullLink}>
                  <div className={styles.menuIcon}><img src="/crm1.png" alt="About Icon" /></div>
                  <div className={styles.menuContent}>
                    <h3 className={styles.menuTitle}>CRM Integration</h3>
                    <p>Data Platform Developers</p>
                  </div>
                </Link>
              </li>

            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
