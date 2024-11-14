"use client"

import React from "react";
import styles from '../styles/carousel.module.css';
import Navbar from '../components/Navbar';
import Subscribe from '../components/suscribe';
import WhyChooseUs from "../components/WhyChooseUs";
import BackgroundVideo from "../components/BackgroundVideo";
import ScrollToTop from "../components/ScrollToTop";
import GenesysPartner3 from "../components/GenesysPartner3";
import Products from "../components/Products";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [

  ];

  return (
    <>
      <Navbar />
      <BackgroundVideo />
      <WhyChooseUs />
      <Products/>
      <GenesysPartner3/>

      <div className={`${styles['carousel-container']} mt-12`}>
        <h2 className={styles['carousel-text']}>Work with a <span className={styles['highlight']}>partner</span> of the industry's <span className={styles['highlight']}>leading technology companies</span></h2>
        <div className={styles['carousel']}>
          <img src="/aws.png" alt="aws" />
          <img src="/genesys.png" alt="genesys" />
          <img src="/twilio.png" alt="twilio" />
          <img src="/gupshup.png" alt="gupshup" />
          <img src="/vonage.png" alt="vonage" />
          <img src="/google.png" alt="google" />
        </div>
      </div>
      <Subscribe />
      <div>
        <ScrollToTop />
      </div>



    </>

  );
}
