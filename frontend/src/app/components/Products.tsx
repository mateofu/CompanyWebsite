import React from 'react';
import styles from '../styles/Products.module.css';

const Products = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Products</h2>
            <p className={styles.subtitle}>easy and fast for your business</p>

            <div className={styles.cardsContainer}>
                {/* Tarjeta 1 */}
                <div className={styles.card}>
                    <img src="/whatsapp.png" alt="Redis Icon" className={styles.icon} />
                    <h3 className={styles.cardTitle}> Whatsapp Business</h3>
                    <ul className={styles.cardList}>
                        <li>WhatsApp Business API for inbound. </li>
                        <li>outbound messaging.</li>
                    </ul>
                </div>

                {/* Tarjeta 2 */}
                <div className={styles.card}>
                    <img src="/sms.png" alt="Vector Icon" className={styles.icon} />
                    <h3 className={styles.cardTitle}> SMS Campaigns</h3>
                    <ul className={styles.cardList}>
                        <li>worldwide coverage. </li>
                        <li>Optimized for vector search.</li>
                        <li>inbound / outbound. </li>
                    </ul>
                </div>

                {/* Tarjeta 3 */}
                <div className={styles.card}>
                    <img src="/texto.png" alt="QStash Icon" className={styles.icon} />
                    <h3 className={styles.cardTitle}> Social Messaging</h3>
                    <ul className={styles.cardList}>
                        <li>Facebook </li>
                        <li>Instagram </li>
                        <li>Twitter </li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <img src="/videollamada.png" alt="QStash Icon" className={styles.icon} />
                    <h3 className={styles.cardTitle}>  Video Call</h3>
                    <ul className={styles.cardList}>
                        <li>WebRTC videocalls, use any device (Mobile, desktop).
                        </li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <img src="/email.png" alt="QStash Icon" className={styles.icon} />
                    <h3 className={styles.cardTitle}>  Email Campaigns</h3>
                    <ul className={styles.cardList}>
                        <li> Email outbound  </li>
                        <li> Campaigns </li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <img src="/robot.png" alt="QStash Icon" className={styles.icon} />
                    <h3 className={styles.cardTitle}>  Voice/ Chat Bots</h3>
                    <ul className={styles.cardList}>
                        <li>  Selfservice for your business.  </li>
                        <li> Google DialogFlow  </li>
                        <li> ApifyCloud Bot  </li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <img src="/llamada.png" alt="QStash Icon" className={styles.icon} />
                    <h3 className={styles.cardTitle}>  Click to Call</h3>
                    <ul className={styles.cardList}>
                        <li>WebRTC calls from any digital source, any device (mobile, desktop)
                        </li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <img src="/crm.png" alt="QStash Icon" className={styles.icon} />
                    <h3 className={styles.cardTitle}> CRM Integration</h3>
                    <ul className={styles.cardList}>
                        <li>Integration to Genesys Cloud Client Application </li>
                        <li> Channels Support: Voice, Messaging, Email</li>
                        <li> Genesys Data Actions for Achitect, Scripts

                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Products;
