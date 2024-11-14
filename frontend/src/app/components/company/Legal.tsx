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
                        Make calls using WebRTC from any digital source and device. Whether from a website, an application or any digital medium, you can make calls with a single click. WebRTC technology ensures real-time calls without the need for additional software, compatible with mobile and desktop devices.                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClickToCall;
