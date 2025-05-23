import React from 'react';
import { FaCode, FaChartLine, FaPalette } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="sobre-mi"
      className="max-w-6xl mx-auto px-4 py-20 mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="card">
        <h2 className="section-title">Sobre mí</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
          <img
            src="/foto-perfil.png"
            alt="Foto de Gianmarco"
              className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-primary-light md:w-60 md:h-60 transform transition-transform duration-300 hover:scale-105"
          />
          </div>
          <div className="space-y-6">
            <p className="text-text-light leading-relaxed text-lg">
              Soy estudiante de Ciencia de Datos e Inteligencia Artificial con fuerte orientación al desarrollo de soluciones digitales basadas en datos. Me especializo en análisis exploratorio, visualización y diseño UX/UI, creando experiencias interactivas con impacto real.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-accent-light">
                <FaCode className="text-2xl" />
                <span className="font-medium">Desarrollo</span>
              </div>
              <div className="flex items-center space-x-3 text-accent-light">
                <FaChartLine className="text-2xl" />
                <span className="font-medium">Análisis de Datos</span>
              </div>
              <div className="flex items-center space-x-3 text-accent-light">
                <FaPalette className="text-2xl" />
                <span className="font-medium">Diseño UX/UI</span>
              </div>
            </div>
          <p className="text-text-light leading-relaxed text-lg">
              Trabajo con herramientas como Python, Power BI, Figma y SQL para transformar datos en conocimiento y tomar decisiones basadas en evidencia. Mi objetivo es seguir creciendo profesionalmente
              en áreas de datos, automatización y diseño digital, contribuyendo a proyectos que generen un impacto positivo.
          </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 