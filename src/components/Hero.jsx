import React from 'react';
import fotoPerfil from '../assets/Proyecto Quitar fondo.png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      // Agregamos w-full y aseguramos el overflow
      className="relative min-h-screen w-full max-w-full flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-0 px-6 overflow-hidden"
    >
      {/* Círculo decorativo corregido: Eliminamos el valor negativo de right para evitar el scroll */}
      <div className="absolute top-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#ff4900]/10 blur-[80px] md:blur-[120px] rounded-full -z-10 animate-pulse"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-12 lg:gap-16">
        {/* Lado del Texto */}
        <div className="w-full lg:w-[550px] text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-[#ff4900]/10 border border-[#ff4900]/20 text-[#ff4900] px-4 py-1.5 mb-6 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4900] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4900]"></span>
            </span>
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">
              {t('hero.greeting')}
            </span>
          </div>

          {/* H1 ajustado: de 8xl a 7xl para evitar desbordamientos */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-[0.95] text-slate-900 dark:text-white tracking-tighter">
            Miguel A. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4900] to-orange-400">
              Sotelo
            </span>
          </h1>

          <div className="mb-6 flex flex-col sm:flex-row items-center gap-3 lg:justify-start justify-center">
            <p className="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-300">
              {/* El espacio {' '} es vital para que no se peguen las palabras */}
              {t('hero.role_prefix')}{' '}
              <span className="text-slate-900 dark:text-white underline decoration-[#ff4900] decoration-4 underline-offset-4 italic">
                {t('hero.role_title')}
              </span>
            </p>
            <span className="hidden sm:block text-slate-400">|</span>
            <span className="px-3 py-1 bg-slate-900 dark:bg-white dark:text-slate-900 text-white text-sm font-black rounded-md">
              UTN FRT
            </span>
          </div>

          <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed lg:min-h-[3.5rem]">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <a
              href="/assets/Miguel Angel Sotelo CV.docx"
              className="group relative w-full sm:w-auto overflow-hidden bg-[#ff4900] text-white px-10 py-4 rounded-xl font-black transition-all duration-300 hover:scale-105"
              download
            >
              <span className="relative z-10">{t('hero.cv_button')}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

            <button
              onClick={() =>
                document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })
              }
              className="w-full sm:w-auto border-2 border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              {t('hero.work_button')}
            </button>
          </div>
        </div>

        {/* Lado de la Imagen */}
        <div className="w-full lg:w-auto flex justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 border-t-4 border-l-4 border-[#ff4900] rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-b-4 border-r-4 border-[#ff4900] rounded-br-3xl opacity-30"></div>

            <div className="relative group overflow-hidden rounded-3xl border-4 border-slate-200 dark:border-white/5 shadow-2xl">
              <img
                src={fotoPerfil}
                alt="Miguel Sotelo"
                // Imagen ajustada: de 420px a 350px en escritorio
                className="w-full max-w-[260px] md:max-w-[320px] lg:max-w-[350px] aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ff4900]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
