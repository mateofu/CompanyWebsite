import styles from '../../styles/clickToCall.module.css';

const ClickToCall = () => {
    return (
        <>
            {/* Sección de Click to Call */}
            <div className={styles['click-to-call-container']}>
                <h2 className={styles['title']}>Click to Call</h2>
                <div className={styles['description-container']}>
                    <div className={styles['feature-item']}>
                        <h3>WebRTC Calls</h3>
                        <p>
                            WebRTC allows real-time voice calls from any digital source and device
                            (mobile or desktop) without the need for additional software.
                            Through API, high-quality and secure calls can be easily integrated,
                            ideal for support applications, consultations or business communications.
                        </p>
                    </div>

                    {/* Imagen debajo del texto */}
                    <div className={styles['image-container']}>
                        <img
                            src="/click2call.png"
                            alt="Descripción de la imagen"
                            className={styles['call-image']}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClickToCall;
