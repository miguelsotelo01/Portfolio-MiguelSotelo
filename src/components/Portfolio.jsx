import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import aluraFixImg from '../assets/alura fix.png';
import ecommerceImg from '../assets/ecomerce.png';
import cuarsoImg from '../assets/cuarso.png';
import businessImg from '../assets/bussines.png';
import taskListImg from '../assets/task list.png';
import encriptadorImg from '../assets/encriptador.png';
import organigramaImg from '../assets/organizacion.png';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: t('portfolio.categories.all') },
    { id: 'gym', label: t('portfolio.categories.landing') },
    { id: 'tours__Web', label: t('portfolio.categories.platform') },
    { id: 'e__commerce', label: t('portfolio.categories.ecommerce') },
    { id: 'world__Tours', label: t('portfolio.categories.tasks') },
  ];

  const projects = [
    {
      id: 1,
      title: 'Alura Fix',
      category: 'tours__Web',
      description: t('portfolio.projects.p1_desc'),
      img: aluraFixImg,
    },
    {
      id: 2,
      title: 'Alura Geek',
      category: 'e__commerce',
      description: t('portfolio.projects.p2_desc'),
      img: ecommerceImg,
    },
    {
      id: 3,
      title: 'Cuarso',
      category: 'gym',
      description: t('portfolio.projects.p3_desc'),
      img: cuarsoImg,
    },
    {
      id: 4,
      title: 'Admin',
      category: 'gym',
      description: t('portfolio.projects.p4_desc'),
      img: businessImg,
    },
    {
      id: 5,
      title: 'Task list',
      category: 'world__Tours',
      description: t('portfolio.projects.p5_desc'),
      img: taskListImg,
    },
    {
      id: 6,
      title: 'Encriptador',
      category: 'world__Tours',
      description: t('portfolio.projects.p6_desc'),
      img: encriptadorImg,
    },
    {
      id: 7,
      title: 'Organigrama',
      category: 'world__Tours',
      description: t('portfolio.projects.p7_desc'),
      img: organigramaImg,
    },
  ];

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-slate-900 dark:text-white">
            {t('portfolio.title')}
          </h2>
          <p className="text-slate-700 dark:text-gray-400">{t('portfolio.subtitle')}</p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
                activeFilter === cat.id
                  ? 'border-[#ff4900] text-[#ff4900] dark:text-white'
                  : 'border-transparent text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Galeria de imagenes de proyecto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[350px] overflow-hidden rounded-lg cursor-pointer animate-fadeIn border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover" />

              {/* OVERLAY: se usa Tailwind para el blur y el color naranja */}
              <div className="absolute inset-0 bg-[#ff4900]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-400 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-2xl font-bold transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
                <span className="mt-6 text-2xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
