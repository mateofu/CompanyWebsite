"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Subscribe from '../../components/suscribe';
import HeroSection from '@/app/components/company/HeroSection';
import Timeline from '@/app/components/company/Timeline';
import PerformanceVideo from '@/app/components/company/PerformanceVideo';


const Page = () => {
  return (
    <>
      <Navbar />
      {/* <HeroSection/> */}
      <Timeline/>
      <PerformanceVideo/>
      <Subscribe /> 
    </>
  );
};

export default Page;
