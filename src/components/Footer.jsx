import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full border-t-2 border-white py-16 px-6">
      {/* Mantenemos el mismo contenedor max-w-6xl para coherencia visual */}
      <div className="max-w-6xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* REDES SOCIALES */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">Redes</h3>
          <div className="text-[#a3a3a3] space-y-2">
            <p className="font-medium text-white">Desarrollador Auténtico e innovador:</p>
            <p className="text-sm">Desarrollo lo que necesitas, con un enfoque en usabilidad y rendimiento.</p>
          </div>
          <div className="flex justify-center md:justify-start gap-6 pt-4">
            <a href="https://github.com/miguelsotelo01" target="_blank" rel="noreferrer" className="text-3xl text-[#a3a3a3] hover:text-[#ff4900] transition-colors duration-300">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.youtube.com/@miky.a.sotelo" target="_blank" rel="noreferrer" className="text-3xl text-[#a3a3a3] hover:text-[#ff4900] transition-colors duration-300">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/miguel-a-sotelo/" target="_blank" rel="noreferrer" className="text-3xl text-[#a3a3a3] hover:text-[#ff4900] transition-colors duration-300">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col items-center md:items-center space-y-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">Contacto</h3>
          <div className="text-[#a3a3a3] space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <i className="fa-solid fa-phone text-[#ff4900]"></i>
              <p>+54 0 3863419786</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <i className="fa-solid fa-envelope text-[#ff4900]"></i>
              <p className="text-sm">miky.a.sotelo.97@gmail.com</p>
            </div>
          </div>
          <a 
            href="mailto:miky.a.sotelo.97@gmail.com"
            className="mt-6 inline-flex items-center gap-2 border border-[#ff4900] text-[#a3a3a3] px-8 py-2 rounded-lg hover:bg-[#ff4900] hover:text-white transition-all duration-300 no-underline text-sm"
          >
            <i className="fa-solid fa-message"></i> Escríbeme
          </a>
        </div>

        {/* SERVICIOS */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider md:text-right">Mis Servicios</h3>
          <div className="text-[#a3a3a3] text-sm space-y-2 md:text-right">
            <p>Desarrollo Frontend</p>
            <p>Desarrollo Backend</p>
            <p>Base de Datos</p>
            <p>Desarrollo en C y C++</p>
          </div>
        </div>

      </div>
      
      {/* Copyright opcional para un toque más pro */}
      <div className="mt-16 text-center text-xs text-gray-600 border-t border-white/10 pt-8">
        © {new Date().getFullYear()} Miguel Sotelo. Hecho con React y Tailwind.
      </div>
    </footer>
  );
};

export default Footer;