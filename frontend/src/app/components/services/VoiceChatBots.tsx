import styles from '../../styles/voiceChatBots.module.css';

const VoiceChatbots = () => {
  return (
    <div
      className={styles['voice-chatbots-container']}
    >

      <h2 className={styles['title']}>Voice / Chat Bots</h2>
      <div className={styles['description-container']}>
        <div className={styles['feature-item']}>
          <h3>Self-Service for Your Business</h3>
          <p>
            Implement self-service solutions with Voice and Chat Bots
            that allow your customers to access information and resolve
            problems on their own. These solutions improve operational
            efficiency and reduce the workload for human agents.
          </p>
          <div className={styles['image-container']}>
            <img
              src="/service.png"
              alt="video"
              className={styles['call-image']}
            />
          </div>
        </div>
        <div className={styles['feature-item']}>
          <h3>Google DialogFlow</h3>
          <p>
            Integrate Google DialogFlow, an advanced bot development platform,
            to create natural conversation experiences. It uses artificial
            intelligence to understand customer intentions and offer accurate
            and contextual responses in real time.
          </p>
          <div className={styles['image-container']}>
            <img
              src="/flow.png"
              alt="video"
              className={styles['call-image']}
            />
          </div>
        </div>
        <div className={styles['feature-item']}>
          <h3>ApifyCloud Bot</h3>
          <p>
            Leverage the power of ApifyCloud Bot to automate interactions and
            provide personalized support at scale. This bot is completely
            customizable and adapts to the specific needs of your company,
            allowing for more efficient management of customer interactions.
          </p>
          <div className={styles['image-container']}>
            <img
              src="/bot4.png"
              alt="video"
              className={styles['call-image']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceChatbots;
