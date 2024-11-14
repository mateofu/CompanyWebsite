"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/suscribe';
import ClickToCall from '@/app/components/services/ClickToCall';



const Page = () => {
  return (
    <>
      <Navbar />
      <ClickToCall/>
      <Subscribe /> 
    </>
  );
};

export default Page;
