"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/suscribe';
import CRM from '../../components/services/CRM'



const Page = () => {
  return (
    <>
      <Navbar />
      <CRM/>
      <Subscribe /> 
    </>
  );
};

export default Page;
