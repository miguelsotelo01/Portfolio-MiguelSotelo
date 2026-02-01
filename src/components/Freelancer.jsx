import React from 'react';
import freelancerImg from '../assets/freelancer2.webp';

const Freelancer = () => {
  return (
    <section 
      className="w-full h-[50vh] my-10 flex flex-col justify-center items-center text-center px-6 relative"
      style={{
        // Aplicamos el gradient y la imagen importada
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${freelancerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-gray-300">
        ¿Tienes un proyecto en mente?
      </p>
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
        Estoy disponible como freelancer
      </h2>
      <div className="pt-4">
        <a 
          href="mailto:miky.a.sotelo.97@gmail.com" 
          className="bg-[#ff4900] text-white px-10 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all no-underline shadow-xl"
        >
          Escríbeme
        </a>
      </div>
    </section>
  );
};

export default Freelancer;