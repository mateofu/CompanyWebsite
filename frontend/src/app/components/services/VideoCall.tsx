import styles from '../../styles/clickToCall.module.css';
import GenesysPartner from '../../components/GenesysPartner';

const VideoCall = () => {
    return (
        <>
            {/* Sección de Click to Call */}
            <div className={styles['click-to-call-container']}>
                <h2 className={styles['title']}>Video Call</h2>
                <div className={styles['description-container']}>
                    <div className={styles['feature-item']}>
                        <h3>WebRTC VideoCalls</h3>
                        <p>
                            WebRTC allows you to make real-time video calls from any
                            device (mobile or desktop) without the need for plugins.
                            Through API, you can easily integrate secure video calls
                            and high quality in your application, offering options to manage
                            connections, participants and recordings. Ideal for support,
                            consultations or virtual meetings.
                        </p>
                        <div className={styles['image-container']}>
                            <img
                                src="/bot3.png"
                                alt="video"
                                className={styles['call-image']}
                            />
                        </div>
                    </div>

                    {/* Imagen debajo del texto */}
                    <div className={styles['image-container']}>
                        <img
                            src="/videocall.png"
                            alt="video"
                            className={styles['call-image']}
                        />
                    </div>
                </div>
            </div>
            <GenesysPartner />
        </>
    );
};

export default VideoCall;
