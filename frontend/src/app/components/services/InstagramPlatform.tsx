import React from 'react';
import styles from '../../styles/products/InstagramPlatform.module.css'

const InstagramPlatform = () => {
    return (
        <div className={styles['platform-wrapper']}>
            <div className={styles['platform-item']}>
                <h3>Instagram</h3>
                <p>With the Instagram API, Genesys Cloud enables support teams
                    Manage user queries from direct messages. The
                    Agents can view, respond, and automate responses to messages
                    sent to the company's Instagram account, making it easy to
                    Quick and effective interaction with followers.
                </p>
                <div className={styles['platform-logos']}>
                    <img src="/meta.png" alt="Vonage Logo" className={styles['platform-logo']} />
                    <img src="/instagram.png" alt="Twilio Logo" className={styles['platform-logo']} />
                </div>
            </div>
        </div>
    );
};

export default InstagramPlatform;
