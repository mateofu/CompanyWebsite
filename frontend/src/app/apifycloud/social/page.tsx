"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/suscribe';
import SocialMessaging from '@/app/components/services/SocialMessaging';


const Page = () => {
  return (
    <>
      <Navbar />
      <SocialMessaging/>
      <Subscribe /> 
    </>
  );
};

export default Page;