import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Freelancer from './components/Freelancer';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
useEffect(() => {
  document.title = t('nav.page_title');
}, [i18n.language, t]);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  return (
    <main className="bg-white dark:bg-black min-h-screen text-slate-900 dark:text-white overflow-x-hidden selection:bg-[#ff4900] transition-colors duration-500">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <AboutMe />
      <Freelancer />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default App;