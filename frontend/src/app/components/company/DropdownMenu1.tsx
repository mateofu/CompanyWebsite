import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/DropdownMenu.module.css'; // Archivo CSS que ya tienes

const DropdownMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [showPdf, setShowPdf] = useState(false);

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
    }, 300); // Ajusta este valor según lo necesites
    setTimeoutId(id);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdownLinkWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          color="foreground"
          href=""
          className={styles.dropdownLink} // Usa el mismo estilo de enlace
        >
          Company ⌄
        </Link>

        {isMenuOpen && (
          <div
            className={styles.dropdownMenu} // Usa el mismo estilo de menú
            onMouseEnter={handleMouseEnter} // Cancelar el temporizador cuando el cursor entra al submenú
            onMouseLeave={handleMouseLeave} // Cerrar el menú si el cursor sale del submenú
          >
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link href="/apifycloud/about" className={styles.fullLink}>
                  <div className={styles.menuIcon}><img src="/empresa.png" alt="Customers Icon" /></div>
                  <div className={styles.menuContent}>
                    <h3 className={styles.menuTitle}>About Us</h3>
                    <p>The teams we empower</p>
                  </div>
                </Link>
              </li>

              <li className={styles.menuItem}>
                <Link href="/apifycloud/contact" className={styles.fullLink}>
                  <div className={styles.menuIcon}><img src="/contactos.png" alt="cus" /></div>
                  <div className={styles.menuContent}>
                    <h3 className={styles.menuTitle}>Contact Us</h3>
                    <p>The teams we empower</p>
                  </div>
                </Link>
              </li>

              <li className={styles.menuItem}>
                <Link href="/apifycloud/terms" className={styles.fullLink}>
                  <div className={styles.menuIcon}><img src="/cumplimiento.png" alt="cus" /></div>
                  <div className={styles.menuContent}>
                    <h3 className={styles.menuTitle}>Terms & Conditions</h3>
                    <p>The teams we empower</p>
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
