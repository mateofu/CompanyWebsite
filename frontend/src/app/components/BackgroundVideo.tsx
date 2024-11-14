import React from 'react';
import Link from 'next/link';

const BackgroundVideo = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center px-4 my-1"
      style={{ 
        height: '100vh', 
        borderTopLeftRadius: '40px',    // Borde redondeado en la esquina superior izquierda
        borderTopRightRadius: '40px',   // Borde redondeado en la esquina superior derecha
        borderBottomLeftRadius: '40px', // Borde redondeado en la esquina inferior izquierda
        borderBottomRightRadius: '40px',// Borde redondeado en la esquina inferior derecha
        overflow: 'hidden'  // Asegura que el contenido no se salga de los bordes
      }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/layout.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contenido de texto */}
      <div className="relative z-10">
        <h1 className="font-black text-4xl md:text-6xl">
          Connect your <span className="text-blue-500">Applications Easily & Securely</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4">
          Optimizing and designing new solutions for your business
        </p>

        {/* Botón Get Started */}
        <Link href="/apifycloud/contact">
          <button className="mt-8 px-8 py-4 bg-blue-500 hover:bg-green-600 text-white text-lg rounded-full transition duration-300 ease-in-out">
            Get Started
          </button>
        </Link>
      </div>

      {/* Superposición de fondo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default BackgroundVideo;
