import React from 'react';
import styles from '../../styles/products/FacebookPlatform.module.css'
import GenesysPartner2 from '../GenesysPartner2'

const FacebookPlatform = () => {
    return (
        <div className={styles['platform-wrapper']}>
            <div className={styles['platform-item']}>
                <h3>Facebook</h3>
                <p>Genesys Cloud integrates Facebook Messenger API 
                  to enable real-time support interactions. Agents can 
                  respond to user queries, send automated messages, and share 
                  media directly on the Facebook platform. Additionally, automatic 
                  campaigns can be set up to interact with customers through Facebook messaging.
                  </p>
                <div className={styles['platform-logos']}>
                    <img src="/meta.png" alt="Vonage Logo" className={styles['platform-logo']} />
                    <img src="/facebook.png" alt="Twilio Logo" className={styles['platform-logo']} />
                </div>
            </div>
        </div>
    );
};

export default FacebookPlatform;
