import React from 'react';
import { motion } from "framer-motion";
import { FaReact, FaPython, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiVite, SiPowerbi, SiFigma, SiCanva, SiReacthookform, SiTailwindcss, SiGoogleanalytics, SiGoogletagmanager } from 'react-icons/si'; // Importar más íconos según necesidad

export default function TechStack() {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Framer Motion', icon: <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}><span className="text-purple-500 text-2xl">✨</span></motion.div> }, // Ícono animado o representativo
        { name: 'Vite', icon: <SiVite className="text-yellow-400" /> },
        // Puedes añadir iconos específicos o usar FaCode si no encuentras
      ]
    },
    {
      category: 'Backend / Lógica',
      items: [
        { name: 'EmailJS', icon: <span className="text-red-400 text-xl">📧</span> }, // Ícono representativo
        { name: '.env Variables', icon: <FaDatabase className="text-gray-400" /> }, // Ícono representativo
        { name: 'React Hook Form', icon: <SiReacthookform className="text-blue-500" /> },
        // Puedes añadir Yup si quieres representarlo
      ]
    },
    {
      category: 'Análisis y Seguimiento',
      items: [
        { name: 'Google Analytics', icon: <SiGoogleanalytics className="text-blue-500" /> },
        { name: 'Google Tag Manager', icon: <SiGoogletagmanager className="text-orange-500" /> },
      ]
    },
    {
      category: 'Infraestructura',
      items: [
        { name: 'GitHub', icon: <FaGithub className="text-gray-400" /> },
        { name: 'GitHub Pages', icon: <FaGithub className="text-gray-400" /> },
        // Añadir Vercel o Netlify si usas (buscar iconos SiVercel, SiNetlify)
      ]
    },
    {
      category: 'Ciencia de Datos',
      items: [
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
        { name: 'Google Colaboratory', icon: <span className="text-yellow-600 text-xl">📒</span> }, // Ícono representativo
        { name: 'Jupyter', icon: <span className="text-orange-500 text-xl">📙</span> }, // Ícono representativo
        { name: 'Power BI', icon: <SiPowerbi className="text-yellow-500" /> },
        // Puedes añadir iconos para pandas, scikit-learn, matplotlib, seaborn si hay
      ]
    },
    {
      category: 'Diseño UX/UI',
      items: [
        { name: 'Figma', icon: <SiFigma className="text-purple-500" /> },
        { name: 'Canva', icon: <SiCanva className="text-blue-400" /> },
        // Puedes añadir Adobe XD si lo usas
      ]
    },
  ];

  return (
    <motion.section
      id="tech-stack"
      className="max-w-6xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }} // Ajustar delay
      viewport={{ once: true }}
    >
      <div className="card">
        <h2 className="section-title">Tecnologías que Uso</h2>

        <div className="space-y-8">
          {technologies.map((techCategory, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-primary-light mb-4">{techCategory.category}</h3>
              <div className="flex flex-wrap gap-4">
                {techCategory.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 text-white text-sm hover:scale-105 transition duration-300"
                  >
                    <div className="text-lg">{tech.icon}</div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 