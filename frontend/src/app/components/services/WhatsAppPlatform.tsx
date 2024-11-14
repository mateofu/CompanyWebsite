import React from 'react';
import styles from '../../styles/products/WhatsAppPlatform.module.css';
import GenesysPartner2 from '../../components/GenesysPartner2'

const WhatsAppPlatform = () => {
    return (
        <div className={styles['platform-wrapper']}>
            <div className={styles['platform-item']}>
                <h3>WhatsApp</h3>
                <p>
                    Through the WhatsApp Business API, Genesys Cloud allows users
                    Agents manage support interactions, send automatic messages
                    and share files. WhatsApp is ideal for fast and personal support,
                    allowing companies to interact with customers in a
                    Secure and widely used platform.
                </p>
                <div className={styles['image-container']}>
                            <img
                                src="/whatsapp2.png"
                                alt="video"
                                className={styles['call-image']}
                            />
                        </div>
                <div className={styles['platform-logos']}>
                    <img src="/Vonage1.png" alt="Vonage Logo" className={styles['platform-logo']} />
                    <img src="/twilio.png" alt="Twilio Logo" className={styles['platform-logo']} />
                    <img src="/gupshup.png" alt="Gupshup Logo" className={styles['platform-logo']} />
                    <img src="/genesys1.png" alt="Genesys Logo" className={styles['platform-logo']} />
                    <img src="/dialog.png" alt="360 Dialog Logo" className={styles['platform-logo']} />
                </div>

                <GenesysPartner2/>


            </div>
        </div>
    );
};

export default WhatsAppPlatform;
