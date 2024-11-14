import React from 'react';
import styles from '../../styles/products/XPlatform.module.css'

const XPlatform = () => {
    return (
        <div className={styles['platform-wrapper']}>
            <div className={styles['platform-item']}>
                <h3>X</h3>
                <p>Integration with Twitter through the Genesys Cloud API allows the
                    management of direct messages and mentions. Support agents can
                    manage customer requests, set up automatic responses
                    and track brand mentions in real time, ensuring
                    Quick response to problems and comments from users on the network.
                </p>
                <div className={styles['platform-logos']}>
                    <img src="/x.png" alt="linkedin Logo" className={styles['platform-logo']} />
                </div>
            </div>
        </div>
    );
};

export default XPlatform;
