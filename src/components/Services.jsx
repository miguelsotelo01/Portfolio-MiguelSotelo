import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      id: 'frontend',
      icon: 'fa-solid fa-layer-group',
      titleKey: 'services.items.frontend.title',
      descKey: 'services.items.frontend.desc',
    },
    {
      id: 'logic',
      icon: 'fa-solid fa-microchip',
      titleKey: 'services.items.logic.title',
      descKey: 'services.items.logic.desc',
    },
    {
      id: 'solutions',
      icon: 'fa-solid fa-rocket',
      titleKey: 'services.items.solutions.title',
      descKey: 'services.items.solutions.desc',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 lg:px-24 bg-white dark:bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado con estilo v2.4 */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white italic tracking-tighter">
            {t('services.title')}
          </h2>
          <div className="h-1.5 w-24 bg-[#ff4900] mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {t('services.description')}
          </p>
        </div>

        {/* Grilla de Especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group p-8 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#ff4900]/10"
            >
              {/* Icono con contenedor dinámico */}
              <div className="w-16 h-16 bg-[#ff4900]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ff4900] transition-colors duration-300">
                <i
                  className={`${service.icon} text-3xl text-[#ff4900] group-hover:text-white transition-colors duration-300`}
                ></i>
              </div>

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                {t(service.titleKey)}
              </h3>

              <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
