"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/suscribe';
import VideoCall from '../../components/services/VideoCall'



const Page = () => {
  return (
    <>
      <Navbar />
      <VideoCall/>
      <Subscribe /> 
    </>
  );
};

export default Page;
