import React, { useState } from 'react';
// Importa tus imágenes aquí (asegúrate de que estén en src/assets)
import aluraFixImg from '../assets/alura fix.png';
import ecommerceImg from '../assets/ecomerce.png';
import cuarsoImg from '../assets/cuarso.png';
import businessImg from '../assets/bussines.png';
import taskListImg from '../assets/task list.png';
import encriptadorImg from '../assets/encriptador.png';
import organigramaImg from '../assets/organizacion.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'gym', label: 'Landing pages' },
    { id: 'tours__Web', label: 'Plataforma' },
    { id: 'e__commerce', label: 'E-commerce' },
    { id: 'world__Tours', label: 'Tareas y demas' }
  ];

  const projects = [
    { id: 1, title: "Alura Fix", category: "tours__Web", description: "Plataforma de videos hecha en React.", img: aluraFixImg },
    { id: 2, title: "Alura Geek", category: "e__commerce", description: "E-commerce hecho en React.", img: ecommerceImg },
    { id: 3, title: "Cuarso", category: "gym", description: "Aplicaciones hechas a la medida.", img: cuarsoImg },
    { id: 4, title: "Admin", category: "gym", description: "La red mas eficiente.", img: businessImg },
    { id: 5, title: "Task list", category: "world__Tours", description: "Proyecto básico de lista de tareas.", img: taskListImg },
    { id: 6, title: "Encriptador", category: "world__Tours", description: "Encriptador de palabras.", img: encriptadorImg },
    { id: 7, title: "Organigrama", category: "world__Tours", description: "Gestión de grupos de trabajo en React.", img: organigramaImg }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Mi trabajo</h2>
          <p className="text-gray-400">Estos son algunos de los proyectos en los que he trabajado.</p>
        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
                activeFilter === cat.id ? 'border-[#ff4900] text-white' : 'border-transparent text-gray-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GALERÍA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative h-[350px] overflow-hidden rounded-lg cursor-pointer animate-fadeIn"
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              
              {/* OVERLAY: Ahora usamos Tailwind para el blur y el color naranja */}
              <div className="absolute inset-0 bg-[#ff4900]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center text-center px-6">
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