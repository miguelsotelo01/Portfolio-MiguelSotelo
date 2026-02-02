import React from 'react';
import { useTranslation } from 'react-i18next';
const Services = () => {
  const { t } = useTranslation();
  // Array de servicios para facilitar el mantenimiento
  const servicesData = [
    { name: t('services.items.html'), icon: "fa-brands fa-html5" },
    { name: t('services.items.css'), icon: "fa-brands fa-css3-alt" },
    { name: t('services.items.angular'), icon: "fa-brands fa-angular" },
    { name: t('services.items.react'), icon: "fa-brands fa-react" },
    { name: t('services.items.mobile'), icon: "fa-solid fa-mobile-screen-button" },
    { name: t('services.items.web'), icon: "fa-solid fa-code" }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto px-4 lg:px-12">
        {/* TÍTULO Y DESCRIPCIÓN */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white italic">{t('services.title')}</h2>
          <p className="text-slate-700 dark:text-gray-400 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* GRILLA DE TARJETAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="group flex items-center gap-5 p-6 bg-[#111111] hover:bg-[#ff4900] transition-all duration-300 rounded-lg cursor-default"
            >
              {/* Círculo del Icono */}
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                <i className={`${service.icon} text-2xl text-white group-hover:text-black transition-colors duration-300`}></i>
              </div>
              
              {/* Nombre del Servicio */}
              <span className="text-lg font-semibold text-white transition-colors duration-300">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;