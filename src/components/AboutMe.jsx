import React from 'react';
import aboutImg from '../assets/freelancer.jpg';
import { useTranslation, Trans } from 'react-i18next';
const AboutMe = () => {
  const { t } = useTranslation();
  // Datos de educación
  const education = [
    { name: t('about.education.systems'), progress: '20%', color: 'bg-[#ff4900]' },
    { name: t('about.education.argentina'), progress: '100%', color: 'bg-[#ff7004]' },
    { name: t('about.education.oracle'), progress: '100%', color: 'bg-[#ff9809]' },
    { name: t('about.education.inti'), progress: '100%', color: 'bg-[#ff9809]' },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 px-6 lg:px-24"
    >
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl mx-auto gap-12 lg:gap-20 px-4 lg:px-12">
        {/* Informacion del texto */}
        <div className="flex-1 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white italic">
            {t('about.title')}
          </h2>
          <div className="text-gray-400 text-base lg:text-lg space-y-4 leading-relaxed">
            <p>
              <Trans i18nKey="about.p1">
                Soy un estudiante de segundo año de{' '}
                <span className="text-slate-900 dark:text-white font-medium">
                  Ingeniería en Sistemas de Información
                </span>{' '}
                en la UTN FRT. Desde mi etapa escolar, la informática ha sido mi motor, llevándome a
                especializarme desde temprano.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="about.p2">
                Me apasiona el <span className="text-[#ff4900] font-medium">desarrollo web</span>,
                las aplicaciones inmersivas y los videojuegos. Además de la ingeniería, soy profesor
                de geografía, entusiasta del deporte y la cultura geek.
              </Trans>
            </p>
          </div>

          {/* Sección de educación */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-wider">
              {t('about.education_title')}
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm lg:text-base">
                    <span className="text-slate-700 dark:text-gray-300">{item.name}</span>
                    <span className="text-[#ff4900] font-bold">{item.progress}</span>
                  </div>
                  {/* Barra de progreso */}
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                      style={{ width: item.progress }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <a
              href="mailto:miky.a.sotelo@email.com"
              className="inline-block bg-[#ff4900] text-white px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all shadow-lg shadow-orange-900/20"
            >
              {t('about.button')}
            </a>
          </div>
        </div>

        {/* Imagen de apoyo */}
        <div className="flex-1 order-1 md:order-2 w-full">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={aboutImg}
              alt="Miguel trabajando"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            {/* Overlay para mejorar el contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
