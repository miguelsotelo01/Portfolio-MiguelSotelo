import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PROJECTS, CATEGORIES } from '../data/portfolioData';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  // Lógica de filtrado optimizada para ingeniería
  const filteredProjects = useMemo(() => {
    return activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-slate-900 dark:text-white">
            {t('portfolio.title')}
          </h2>
          <p className="text-slate-700 dark:text-gray-400">{t('portfolio.subtitle')}</p>
        </div>

        {/* Filtros Dinámicos */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
                activeFilter === cat.id
                  ? 'border-[#ff4900] text-[#ff4900] dark:text-white'
                  : 'border-transparent text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Grilla Dinámica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-componente para mantener el código limpio y preparado para la v2.2
const ProjectCard = ({ project, t }) => (
  <div className="group relative h-[350px] overflow-hidden rounded-lg cursor-pointer animate-fadeIn border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300">
    {/* Imagen con zoom suave al hacer hover */}
    <img
      src={project.img}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Overlay con Glassmorphism */}
    <div className="absolute inset-0 bg-[#ff4900]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-400 flex flex-col items-center justify-center text-center px-6">
      <h3 className="text-2xl font-bold transform translate-y-10 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300">
        {project.title}
      </h3>

      <p className="mt-2 text-sm transform translate-y-10 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 delay-75">
        {t(project.descriptionKey)}
      </p>

      {/* Sugerencia A: Badges de Tecnologías - v2.2 */}
      <div className="flex flex-wrap justify-center gap-2 mt-4 transform translate-y-10 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 delay-100">
        {project.techStack &&
          project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white"
            >
              {tech}
            </span>
          ))}
      </div>

      {/* Enlaces: Repo y Demo (Mejora de UX v2.2) */}
      <div className="flex gap-4 mt-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-150">
        <a
          href={project.links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
          title="Ver Código"
        >
          <i className="fa-brands fa-github text-xl"></i>
        </a>
        {project.links.demo && project.links.demo !== '#' && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
            title="Ver Demo"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Portfolio;
