import React, { useState } from 'react';
import freelancerImg from '../assets/freelancer2.webp';
import { useTranslation } from 'react-i18next';
import ContactModal from './ContactModal';
const Freelancer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <section
      className="w-full h-[50vh] my-10 flex flex-col justify-center items-center text-center px-6 relative"
      style={{
        // se aplica el gradient y la imagen importada
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${freelancerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-gray-300">
        {t('freelancer.question')}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">{t('freelancer.title')}</h2>
      <div className="pt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#ff4900] text-white px-10 py-3 rounded-lg font-bold hover:scale-105 active:scale-95 hover:brightness-110 shadow-xl shadow-[#ff4900]/20 transition-all duration-300 cursor-pointer"
        >
          {t('freelancer.button')}
        </button>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialSubject="freelance"
      />
    </section>
  );
};

export default Freelancer;
