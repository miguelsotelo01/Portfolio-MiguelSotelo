import React from 'react';
import fotoPerfil from '../assets/Proyecto Quitar fondo.png';
import { useTranslation } from 'react-i18next';
const Hero = () => {
  const { t } = useTranslation();
  return (
    // CORRECCIÓN AQUÍ: Cambiamos 'lg:pt-0' por 'lg:pt-28' (aprox 112px)
    // Esto empuja el contenido hacia abajo en escritorio para que no lo tape la nav.
    // En móvil sigue usando 'pt-20', por lo que no se altera.
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 lg:pt-28 lg:pb-0 px-6">
      
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-10 lg:gap-20 px-4 lg:px-12">
        
        {/* IMAGEN */}
        <div className="w-full lg:flex-1 flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-orange-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src={fotoPerfil} 
              alt="Miguel Sotelo" 
              className="relative w-full max-w-[280px] md:max-w-[350px] lg:max-w-[450px] aspect-square object-cover rounded-2xl border-4 border-slate-200 border-[#ff4900]/20"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="w-full lg:flex-1 text-center lg:text-left order-2 lg:order-1">
          {/* La burbuja reaparecerá porque ya no está tapada por el nav */}
          <div className="inline-block relative bg-[#ff4900] text-white px-6 py-2 mb-6 rounded-sm shadow-lg">
            <span className="text-sm md:text-base font-bold uppercase tracking-wider">{t('hero.greeting')}</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#ff4900]"></div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 leading-tight text-slate-900 dark:text-white">
            Sr. Miguel <br className="hidden lg:block" /> Sotelo
          </h1>
          
          <p className="text-gray-400 text-lg md:text-2xl mb-10 max-w-lg mx-auto lg:mx-0">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="/assets/Miguel Angel Sotelo CV.docx" 
              className="w-full sm:w-auto bg-[#ff4900] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,73,0,0.4)] transition-all duration-300"
              download
            >
              {t('hero.cv_button')}
            </a>
            <button 
              onClick={() => document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})}
              className="w-full sm:w-auto border-2 border-slate-900 text-slate-900 dark:border-white dark:text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              {t('hero.work_button')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;