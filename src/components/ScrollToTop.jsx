import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para detectar el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-[#ff4900] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 animate-fadeIn cursor-pointer"
          aria-label="Volver arriba"
        >
          <i className="fa-solid fa-arrow-up text-xl"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
