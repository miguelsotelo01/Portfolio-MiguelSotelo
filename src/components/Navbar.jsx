import React, { useState } from 'react';
import logoLight from '../assets/logo blanco.png';
import logoDark from '../assets/logo negro.png';
import { useTranslation } from 'react-i18next';
const Navbar = ({ toggleTheme, theme }) => {
  // Estado para controlar el menú móvil
  const [isOpen, setIsOpen] = useState(false);

  // Función para scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // se cierra el menú al hacer clic en móvil
    }
  };
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-500">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 lg:px-12 py-4 relative">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
          <img
            src={theme === 'dark' ? logoLight : logoDark}
            alt="Logo"
            className="w-24 md:w-32 h-auto transition-all duration-500"
          />
        </div>

        {/* Boton hamburguesa (Solo en móvil) */}
        <button
          className="xl:hidden flex flex-col justify-between w-8 h-6 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-1 w-full bg-slate-900 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
          ></span>
          <span
            className={`h-1 w-full bg-slate-900 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`h-1 w-full bg-slate-900 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
          ></span>
        </button>

        {/* Links de navegación */}
        <div
          className={`
          fixed xl:static top-0 right-0 h-screen xl:h-auto w-full xl:w-auto
          bg-[#ff4900] xl:bg-transparent flex flex-col xl:flex-row items-center justify-center gap-8
          transition-transform duration-500 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full xl:translate-x-0'}
        `}
        >
          <ul className="flex flex-col xl:flex-row list-none gap-8 text-2xl xl:text-base font-medium">
            <li
              className="cursor-pointer text-slate-900 dark:text-white hover:bg-[#ff4900] xl:hover:bg-transparent xl:hover:text-[#ff4900] p-4 transition-colors"
              onClick={() => scrollToSection('about')}
            >
              {t('nav.about')}
            </li>
            <li
              className="cursor-pointer text-slate-900 dark:text-white hover:bg-[#ff4900] xl:hover:bg-transparent xl:hover:text-[#ff4900] p-4 transition-colors"
              onClick={() => scrollToSection('services')}
            >
              {t('nav.services')}
            </li>
            <li
              className="cursor-pointer text-slate-900 dark:text-white hover:bg-[#ff4900] xl:hover:bg-transparent xl:hover:text-[#ff4900] p-4 transition-colors"
              onClick={() => scrollToSection('portfolio')}
            >
              {t('nav.portfolio')}
            </li>
            <li
              className="cursor-pointer text-slate-900 dark:text-white hover:bg-[#ff4900] xl:hover:bg-transparent xl:hover:text-[#ff4900] p-4 transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              {t('nav.contact')}
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-2xl xl:text-xl flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <i className="fa-solid fa-sun text-yellow-400"></i>
            ) : (
              <i className="fa-solid fa-moon text-slate-600"></i>
            )}
          </button>
          <button
            onClick={toggleLanguage}
            className="xl:ml-4 text-white xl:text-slate-600 xl:dark:text-gray-400 hover:text-white xl:hover:text-[#ff4900] font-bold transition-colors uppercase tracking-widest text-xl xl:text-sm"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
          <div className="mt-4 xl:mt-0">
            <a
              href="mailto:miky.a.sotelo.97@gmail.com"
              className="bg-[#ff4900] xl:bg-[#ff4900] text-white px-8 py-3 rounded-lg no-underline text-xl xl:text-sm font-bold hover:brightness-110 transition-all"
            >
              {t('nav.hire_me')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
