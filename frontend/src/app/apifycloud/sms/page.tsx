"use client";


import styles from '../../styles/smsCampaigns.module.css';
import Navbar from '@/app/components/Navbar';
import Subscribe from '@/app/components/suscribe';

const SmsCampaigns = () => {
    return (
        <>
            <Navbar />
            <div className={styles['sms-campaigns-container']}>
                <div className={styles['sms-campaigns-container']}>
                    <h2 className={styles['title']}>Campaigns</h2>
                    <div className={styles['description-container']}>
                        <div className={styles['feature-item']}>
                            <img
                                src="/apifycloud3.png"
                                alt="Email"
                                className={styles['campaign-image']}
                            />
                        </div>
                    </div>
                </div>
                <h2 className={styles['title']}>Email Campaigns</h2>
                <div className={styles['description-container']}>
                    <div className={styles['feature-item']}>
                        <h3>Email Outbound</h3>
                        <p>
                            Send mass emails to your clients using our Email Campaigns platform.
                            Personalize each message to ensure your communication is relevant to each
                            recipient. Increase the effectiveness of your campaigns through detailed
                            analysis of open and click rates.
                        </p>
                        <img
                            src="/email3.png"
                            alt="Email"
                            className={styles['campaign-image']}
                        />
                    </div>
                    <div className={styles['feature-item']}>
                        <h3>Campaign Management</h3>
                        <p>
                            The platform allows you to manage email campaigns with ease. From template
                            creation to audience segmentation, our solution simplifies campaign
                            execution. Take advantage of automation features to send emails at the
                            right time, which improves conversion rates.
                        </p>
                        <img
                            src="/campaign2.png"
                            alt="campaign"
                            className={styles['campaign-image']}
                        />
                    </div>
                </div>
            </div>
            <div className={styles['email-campaigns-container']}>
                <h2 className={styles['title']}>SMS Campaigns</h2>
                <div className={styles['description-container']}>
                    <div className={styles['feature-item']}>
                        <h3>Worldwide Coverage</h3>
                        <p>
                            Our SMS Campaigns platform offers global coverage,
                            allowing companies to connect with customers anywhere in the world.
                            Whether you're sending promotional messages, service alerts,
                            or transactional notifications, we guarantee delivery of your messages
                            through a network of trusted carriers in multiple regions.
                        </p>
                        <img
                            src="/world.png"
                            alt="world"
                            className={styles['campaign-image']}
                        />
                    </div>
                    <div className={styles['feature-item']}>
                        <h3>Inbound / Outbound SMS</h3>
                        <p>
                            Manage both inbound and outbound SMS campaigns.
                            Outbound campaigns allow you to send personalized mass messages
                            to your contacts, while inbound campaigns allow you to receive
                            responses and requests from users, facilitating real-time interaction
                            and improving the customer experience. Supports automatic responses
                            and advanced response management.
                        </p>
                        <img
                            src="/buzon.png"
                            alt="buzon"
                            className={styles['campaign-image']}
                        />
                    </div>
                </div>
            </div>
            <Subscribe />
        </>
    );
};

export default SmsCampaigns;
