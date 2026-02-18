import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactModal from './ContactModal';
const Footer = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer
      id="contact"
      className="w-full border-t-2 border-slate-200 dark:border-white py-16 px-6 transition-colors duration-500"
    >
      {/* Se mantiene el mismo contenedor max-w-6xl para coherencia visual */}
      <div className="max-w-6xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Redes sociales */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            {t('footer.socials_title')}
          </h3>
          <div className="text-slate-600 dark:text-[#a3a3a3] space-y-2">
            <p className="font-medium text-slate-800 dark:text-white">{t('footer.dev_status')}</p>
            <p className="text-sm text-slate-700 dark:text-white">{t('footer.tagline')}</p>
          </div>
          <div className="flex justify-center md:justify-start gap-6 pt-4 ">
            <a
              href="https://github.com/miguelsotelo01"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-slate-400 dark:text-[#a3a3a3] hover:text-[#ff4900] transition-colors duration-300"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.youtube.com/@miky.a.sotelo"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-slate-400 dark:text-[#a3a3a3] hover:text-[#ff4900] transition-colors duration-300"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-a-sotelo/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-slate-400 dark:text-[#a3a3a3] hover:text-[#ff4900] transition-colors duration-300"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            {t('footer.contact_title')}
          </h3>
          <div className="text-[#a3a3a3] space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <i className="fa-solid fa-phone text-[#ff4900]"></i>
              <p className="text-slate-700 dark:text-white">+54 0 3863419786</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <i className="fa-solid fa-envelope text-[#ff4900]"></i>
              <p className="text-sm text-slate-700 dark:text-white">miky.a.sotelo.97@gmail.com</p>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 inline-flex items-center gap-2 bg-[#ff4900] text-white px-8 py-2 rounded-lg hover:scale-105 active:scale-95 hover:brightness-110 shadow-lg shadow-[#ff4900]/20 transition-all duration-300 cursor-pointer text-sm font-bold"
          >
            <i className="fa-solid fa-message"></i> {t('footer.write_me')}
          </button>
        </div>

        {/* Servicios */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wider md:text-right">
            {t('footer.services_title')}
          </h3>
          <div className="text-slate-700 dark:text-white text-sm space-y-2 md:text-right">
            <p>{t('footer.frontend')}</p>
            <p>{t('footer.backend')}</p>
            <p>{t('footer.db')}</p>
            <p>{t('footer.cpp')}</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center text-xs text-slate-500 dark:text-gray-600 border-t border-slate-200 dark:border-white/10 pt-8">
        © {new Date().getFullYear()} Miguel Sotelo. {t('footer.built_with')}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialSubject="general"
      />
    </footer>
  );
};

export default Footer;
