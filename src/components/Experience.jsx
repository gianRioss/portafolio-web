import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaCode, FaYoutube, FaExternalLinkAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: "Editor Audiovisual",
      company: "ECAMEC",
      location: "Buenos Aires, Argentina",
      period: "2023 – Actualidad",
      icon: <FaVideo className="text-blue-500" />,
      description: "ECAMEC, empresa especializada en medición de corriente y calidad de energía.",
      highlights: [
        "Producción y edición de videos explicativos sobre el uso e instalación de sensores y analizadores de red.",
        "Creación de contenido técnico-educativo para YouTube, dirigido a clientes, instaladores y distribuidores.",
        "Edición con subtítulos, cortes dinámicos, gráficos y demostraciones prácticas.",
        "Coordinación con equipos técnicos para garantizar precisión y enfoque didáctico."
      ],
      link: {
        url: "https://www.youtube.com/@ecamecARG",
        text: "Ver canal de ECAMEC"
      }
    },
    {
      title: "Desarrollo Web Freelance",
      company: "Independiente",
      location: "Argentina",
      period: "2025 – Actualidad",
      icon: <FaCode className="text-green-500" />,
      description: "Desarrollo de sitios web modernos y responsivos para profesionales y pequeños emprendimientos.",
      highlights: [
        "Implementación de interfaces con HTML, CSS y React",
        "Uso de herramientas como Tailwind, Vite y Figma para maquetación y diseño",
        "Optimización para mobile, performance y experiencia de usuario",
        "Trabajo colaborativo con clientes para captar requerimientos y brindar soluciones web funcionales"
      ]
    }
  ];

  return (
    <motion.section
      id="experiencia"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Experiencia Profesional</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria profesional y experiencia en diferentes roles
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl p-3 bg-white/5 rounded-lg">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {exp.title} – {exp.company}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-accent-light" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-accent-light" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-300">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <span className="text-accent-light mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.link && (
                    <a
                      href={exp.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-accent-light hover:text-accent transition-colors duration-300"
                    >
                      {exp.link.text}
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 