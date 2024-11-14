import React from 'react';
import styles from '../../styles/products/LinkedinPlatform.module.css'

const LinkedinPlatform = () => {
    return (
        <div className={styles['platform-wrapper']}>
            <div className={styles['platform-item']}>
                <h3>Linkedin</h3>
                <p>Genesys Cloud offers integration with LinkedIn so that teams
                    support manage direct messages on the platform, especially
                    focused on professional interactions. Agents can respond to
                    queries, send attachments, and take advantage of the capabilities of
                    automation to facilitate communication with contacts and potential
                    customers.
                </p>
                <div className={styles['platform-logos']}>
                    <img src="/linkedin1.svg" alt="linkedin Logo" className={styles['platform-logo']} />
                </div>
            </div>
        </div>
    );
};

export default LinkedinPlatform;
