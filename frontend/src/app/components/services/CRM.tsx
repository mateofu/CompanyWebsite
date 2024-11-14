import styles from '../../styles/products/crm.module.css';

const ClickToCall = () => {
    return (
        <>
            {/* Sección de Click to Call */}
            <div className={styles['click-to-call-container']}>
                <h2 className={styles['title']}>CRM Integration</h2>
                <div className={styles['description-container']}>
                    <div className={styles['feature-item']}>
                        <h3>ApifyCloud CRM
                        </h3>
                        <p>
                            Integration with the Genesys Cloud client application, offering
                            support for multiple channels: voice, messaging and email. Includes
                            Genesys data actions for Architect and Scripts, allowing efficient
                            management of interactions and automation of processes in the CRM.
                        </p>

                        <div className={styles['image-container']}>
                            <img
                                src="/crm2.png"
                                alt="Descripción de la imagen"
                                className={styles['call-image']}
                            />
                        </div>

                        <div className={styles['image-container']}>
                            <img
                                src="/salesforce.png"
                                alt="Descripción de la imagen"
                                className={styles['call']}
                            />
                            <img
                                src="/hubspot.png"
                                alt="Descripción de la imagen"
                                className={styles['call']}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClickToCall;
