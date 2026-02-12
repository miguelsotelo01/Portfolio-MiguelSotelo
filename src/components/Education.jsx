import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-20 px-6 lg:px-24 bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center italic text-slate-900 dark:text-white">
          {t('edu.title')}
        </h2>

        <div className="relative">
          {/* Línea Central (Solo en Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#ff4900]/30"></div>

          <div className="space-y-12">
            {[...EDUCATION].reverse().map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Espacio vacío para el lado opuesto */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Punto en la línea central */}
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#ff4900] rounded-full shadow-lg border-4 border-white dark:border-slate-900">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Card de Educación */}
                  <div className="w-full md:w-5/12 mt-6 md:mt-0">
                    <div className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <span className="text-[#ff4900] font-bold text-sm uppercase tracking-wider">
                        {t(item.yearkey)}
                      </span>
                      <h3 className="text-xl font-bold mt-2 text-slate-900 dark:text-white">
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-slate-600 dark:text-orange-100/70 font-medium italic">
                        {t(item.institutionKey)}
                      </p>
                      <p className="mt-4 text-sm text-slate-700 dark:text-gray-400 leading-relaxed">
                        {t(item.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
