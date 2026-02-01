import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Freelancer from './components/Freelancer';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#ff4900]">
      <Navbar />
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