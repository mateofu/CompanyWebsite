import React from 'react';
import styles from '../../styles/Timeline.module.css';
import GenesysPartner from '../GenesysPartner';
import GenesysPartner2 from '../../components/GenesysPartner2';
import Hero2 from './hero2';

const Timeline = () => {
    return (

        <>
            {/* <div className={styles.timelineContainer}>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>March, 2021</span>
                        <strong className={styles.eventTitle}>Company Creation</strong>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>June 15th, 2022</span>
                        <strong className={styles.eventTitle}>New Partners</strong>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>July, 2022</span>
                        <strong className={styles.eventTitle}>Website Publication</strong>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>December, 2022</span>
                        <strong className={styles.eventTitle}>Open Access</strong>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>August, 2023</span>
                        <strong className={styles.eventTitle}>AppFoundry Partner</strong>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.date}>April 15th, 2024</span>
                        <strong className={styles.eventTitle}>New Website</strong>
                    </div>
                </div>
            </div> */}
            <Hero2 />
            {/* <GenesysPartner />
            <GenesysPartner2 /> */}
        </>
    );
};

export default Timeline;
