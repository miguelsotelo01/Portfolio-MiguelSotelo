import React, { useState } from 'react';
import logo from '../assets/Sin título.png';

const Navbar = () => {
  // Estado para controlar el menú móvil (adiós al checkbox)
  const [isOpen, setIsOpen] = useState(false);

  // Función para scroll suave (puedes mejorarla luego con una librería)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Cerramos el menú al hacer clic en móvil
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 lg:px-12 py-4 relative">
        
        {/* LOGO */}
        <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="Logo" className="w-24 md:w-32 h-auto" />
        </div>

        {/* BOTÓN HAMBURGUESA (Solo móvil) */}
        <button 
          className="xl:hidden flex flex-col justify-between w-8 h-6 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-1 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`h-1 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-1 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>

        {/* LINKS DE NAVEGACIÓN */}
        <div className={`
          fixed xl:static top-0 right-0 h-screen xl:h-auto w-full xl:w-auto
          bg-[#ff4900] xl:bg-transparent flex flex-col xl:flex-row items-center justify-center gap-8
          transition-transform duration-500 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'}
        `}>
          <ul className="flex flex-col xl:flex-row list-none gap-8 text-2xl xl:text-base font-medium">
            <li className="cursor-pointer hover:bg-[#ff4900] xl:hover:bg-transparent xl:hover:text-[#ff4900] p-4 transition-colors" onClick={() => scrollToSection('about')}>Sobre mí</li>
            <li className="cursor-pointer hover:bg-[#ff4900] xl:hover:bg-transparent xl:hover:text-[#ff4900] p-4 transition-colors" onClick={() => scrollToSection('services')}>Servicios</li>
            <li className="cursor-pointer hover:bg-[#ff4900] xl:hover:bg-transparent xl:hover:text-[#ff4900] p-4 transition-colors" onClick={() => scrollToSection('portfolio')}>Portafolio</li>
            <li className="cursor-pointer hover:bg-[#ff4900] xl:hover:bg-transparent xl:hover:text-[#ff4900] p-4 transition-colors" onClick={() => scrollToSection('contact')}>Contacto</li>
          </ul>
          
          <div className="mt-4 xl:mt-0">
            <a 
              href="mailto:miky.a.sotelo.97@gmail.com" 
              className="bg-[#ff4900] xl:bg-[#ff4900] text-white px-8 py-3 rounded-lg no-underline text-xl xl:text-sm font-bold hover:brightness-110 transition-all"
            >
              Contratame
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;