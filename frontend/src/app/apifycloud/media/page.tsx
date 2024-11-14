"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/suscribe';
import VoiceChatBots from '@/app/components/services/VoiceChatBots';


const Page = () => {
  return (
    <>
      <Navbar />
      <VoiceChatBots/>
      <Subscribe /> 
    </>
  );
};

export default Page;
