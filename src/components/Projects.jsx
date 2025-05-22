import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Análisis de Desgaste Laboral - IBM HR Analytics",
      description: "Exploración y modelado predictivo sobre datos sintéticos de IBM para detectar causas de deserción laboral. Incluye visualizaciones, limpieza y un modelo de árbol de decisión.",
      image: "/imagen-analisis-desgaste.png",
      tools: ["Python", "Pandas", "Seaborn", "Scikit-learn"],
      github: "https://github.com/gianRioss/ibm-rrhh-attrision-analysis",
      demo: null,
      category: "Data Science"
    },
    {
      title: "Análisis de Billeteras Virtuales en Argentina (2019–2024)",
      description: "Proyecto con +100.000 transacciones simuladas. Incluye segmentación por edad, género y provincia, visualizaciones en Power BI y métricas clave sobre adopción digital.",
      image: "/imagen-billeteras-virtuales.png",
      tools: ["Python", "SQL", "Power BI", "Excel"],
      github: "https://github.com/gianRioss/billeteras-virtuales-argentina",
      demo: null,
      category: "Data Analysis"
    }
  ];

  return (
    <motion.section
      id="proyectos"
      className="max-w-6xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="card">
        <h2 className="section-title">Proyectos Destacados</h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border-l-4 border-primary-light flex flex-col md:flex-row gap-8 items-center group"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-full md:w-1/3 overflow-hidden rounded-lg shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium bg-primary-light/80 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent-light hover:text-accent transition-colors duration-300"
                  >
                    <FaGithub className="text-xl" />
                    <span>Código</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent-light hover:text-accent transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span>Demo</span>
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
