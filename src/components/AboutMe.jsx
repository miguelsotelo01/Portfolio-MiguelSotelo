import React from 'react';
import aboutImg from '../assets/freelancer.jpg';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  // Categorías técnicas para reemplazar las barras planas
  const techCategories = [
    { title: 'Frontend', skills: ['React', 'Tailwind CSS', 'JavaScript (ES6+)'] },
    { title: 'Backend & Tools', skills: ['Node.js', 'Git/GitHub', 'Vite'] },
    { title: 'Engineering Foundations', skills: ['Logic', 'Data Structures', 'Algorithms'] },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-24 bg-white dark:bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Imagen: Ahora con tamaño controlado y decoración técnica */}
        <div className="w-full lg:w-2/5 order-1">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#ff4900] to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Miguel Sotelo - Dev"
                className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Elemento geométrico de ingeniería */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-[#ff4900] -z-10"></div>
          </div>
        </div>

        {/* Contenido de Texto */}
        <div className="w-full lg:w-3/5 order-2 space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 italic text-slate-900 dark:text-white">
              {t('about.title')}
            </h2>
            <div className="h-1.5 w-20 bg-[#ff4900] rounded-full"></div>
          </div>

          <div className="space-y-4 text-slate-700 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              {t('about.p1')}{' '}
              {/* "Estudiante de Ingeniería en Sistemas enfocado en soluciones escalables..." */}
            </p>
            <p>
              {t('about.p2')}{' '}
              {/* "Mi objetivo es aplicar la lógica y la arquitectura sólida para crear productos..." */}
            </p>
          </div>

          {/* Nueva Grilla de Skills (v2.4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {techCategories.map((cat, idx) => (
              <div
                key={idx}
                className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10"
              >
                <h4 className="font-black text-[#ff4900] text-sm uppercase tracking-widest">
                  {cat.title}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <li key={i} className="text-sm font-medium text-slate-900 dark:text-gray-300">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl"
            >
              {t('about.button')}
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
