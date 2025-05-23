import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { smoothScroll } from '../utils/animations';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-900 to-slate-900 text-white p-4 pt-20">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/background-pattern.svg)' }}></div>
      <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
        <div className="flex justify-center">
          <img 
            src="/foto-perfil.png" 
            alt="Gianmarco Ríos"
            className="w-48 h-48 rounded-full object-cover border-4 border-primary-light shadow-xl hover:scale-105 transition-transform duration-300"
          />
          {/* Comentario para forzar un nuevo despliegue */}
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light">
            Gianmarco Mauricio Ríos
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            Estudiante de Ciencia de Datos e Inteligencia Artificial
          </p>
          <div className="text-xl md:text-2xl font-medium text-accent-light space-y-2">
            <p>Desarrollador de Soluciones de Datos</p>
            <p className="text-lg text-gray-400">UX/UI | Python | Power BI | SQL</p>
          </div>
        </div>
        <div className="flex justify-center space-x-8 text-3xl pt-4">
          <a 
            href="https://www.linkedin.com/in/gianmarco-rios/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-light transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/gianRioss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-light transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="#contacto" 
            onClick={(e) => smoothScroll(e, '#contacto')}
            className="hover:text-primary-light transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="pt-12">
          <a 
            href="#sobre-mi" 
            onClick={(e) => smoothScroll(e, '#sobre-mi')}
            className="text-gray-300 hover:text-primary-light transition-all duration-300 animate-bounce text-4xl"
            aria-label="Scroll down"
          >
            <FaArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
} 