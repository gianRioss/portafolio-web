import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown, FaWhatsapp } from 'react-icons/fa';
import { smoothScroll } from '../utils/animations';
import { motion, useScroll, useTransform } from "framer-motion";
import { trackEvent } from '../utils/analytics';
import { useEffect } from 'react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  useEffect(() => {
    // Evento de prueba para verificar Google Analytics
    trackEvent('Test', 'Hero Section Loaded', 'Hero Component');
  }, []);

  return (
    <motion.section 
      id="inicio" 
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center text-center p-4 pt-20 overflow-hidden"
    >
      {/* Efecto de cristal de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/90 backdrop-blur-md"></div>
      
      {/* Partículas de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-accent-light rounded-full blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative p-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]">
              <img 
                src="foto-perfil.png" 
                alt="Gianmarco Ríos" 
                className="w-48 h-48 rounded-full object-cover border-4 border-primary-light/50 shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] transition-all duration-500">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light">
              Gianmarco Mauricio Ríos
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light mt-4">
              Estudiante de Ciencia de Datos e Inteligencia Artificial
            </p>
            <div className="text-xl md:text-2xl font-medium text-accent-light space-y-2 mt-4">
              <p>Desarrollador de Soluciones de Datos</p>
              <p className="text-lg text-gray-400">UX/UI | Python | Power BI | SQL</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="flex justify-center space-x-8 text-3xl pt-4"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] transition-all duration-500"
          >
            <a 
              href="https://www.linkedin.com/in/gianmarco-rios/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] transition-all duration-500"
          >
            <a 
              href="https://github.com/gianRioss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] transition-all duration-500"
          >
            <a 
              href="https://wa.me/5491125068490" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] transition-all duration-500"
          >
            <a 
              href="#contacto" 
              onClick={(e) => smoothScroll(e, '#contacto')}
              className="hover:text-primary-light transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
          className="pt-12"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] transition-all duration-500 inline-block"
          >
            <a 
              href="#sobre-mi" 
              onClick={(e) => smoothScroll(e, '#sobre-mi')}
              className="text-gray-300 hover:text-primary-light transition-all duration-300 animate-bounce text-4xl"
              aria-label="Scroll down"
            >
              <FaArrowDown />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 