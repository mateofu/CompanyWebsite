"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/suscribe';
import Legal from '../../components/company/Legal'


const Page = () => {
  return (
    <>
      <Navbar />
      <Legal/>
      <Subscribe /> 
    </>
  );
};

export default Page;
