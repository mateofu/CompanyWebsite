import React from 'react';
import styles from '../../styles/PerformanceVideo.module.css';

const PerformanceVideo = () => {
  return (
    <div className={styles.performanceContainer}>
      <div className={styles.videoContainer}>
        {/* Reproducción automática, en bucle y sin sonido (muted) */}
        <video autoPlay loop muted className={styles.video} poster="/path-to-poster-image.jpg">
          <source src="/grafica.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className={styles.performanceDetails}>
        <h2>Performance</h2>
        <p>
        Explore the excellent performance of our services. 
        Giving Reliability and scalability that we provide to our clients.
        </p>
        <ul>
          <li>High availability and uptime</li>
          <li>Scalable infrastructure</li>
          <li>Real-time analytics</li>
          <li>Fast and reliable API integrations</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceVideo;
