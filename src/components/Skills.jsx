/* eslint-disable no-unused-vars */
import { FaPython, FaDatabase, FaChartBar, FaCode, FaProjectDiagram, FaTools, FaGithub } from 'react-icons/fa';
import { SiPowerbi, SiFigma, SiJupyter, SiPandas, SiScikitlearn } from 'react-icons/si';
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      category: 'Diseño y Prototipado',
      items: [
        { name: 'Figma', icon: <SiFigma className="text-2xl" />, level: 80 },
        { name: 'Canva', icon: <FaCode className="text-2xl" />, level: 70 },
        // Puedes añadir Adobe XD si lo usas
      ]
    },
    {
      category: 'Entorno de Desarrollo',
      items: [
        { name: 'Jupyter', icon: <SiJupyter className="text-2xl" />, level: 85 },
        { name: 'Google Colaboratory', icon: <FaCode className="text-2xl" />, level: 80 },
        // Puedes añadir Google Colab si lo usas
      ]
    },
    {
      category: 'Control de Versiones',
      items: [
        { name: 'Git', icon: <FaTools className="text-2xl" />, level: 75 },
        { name: 'GitHub', icon: <FaGithub className="text-2xl" />, level: 80 }, // Añadir GitHub
      ]
    },
    // Puedes añadir otras categorías para Python, SQL, Power BI, Pandas, Scikit-learn
    // Por ejemplo:
    // {
    //   category: 'Lenguajes de Programación',
    //   items: [
    //     { name: 'Python', icon: <FaPython className="text-2xl" />, level: 85 },
    //     { name: 'HTML/CSS', icon: <FaCode className="text-2xl" />, level: 75 }
    //   ]
    // },
    // {
    //   category: 'Datos y Análisis',
    //   items: [
    //     { name: 'SQL', icon: <FaDatabase className="text-2xl" />, level: 80 },
    //     { name: 'Power BI', icon: <SiPowerbi className="text-2xl" />, level: 85 },
    //     { name: 'Pandas', icon: <SiPandas className="text-2xl" />, level: 80 },
    //     { name: 'Scikit-learn', icon: <SiScikitlearn className="text-2xl" />, level: 70 }
    //   ]
    // }
  ];

  return (
    <motion.section
      id="habilidades"
      className="max-w-6xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="card">
        <h2 className="section-title">Habilidades Técnicas</h2>
        
        <div className="space-y-12">
          {skills.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-light">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((skill, skillIndex) => (
            <div
                    key={skillIndex}
                    className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-accent-light hover:scale-110 transition duration-300">{skill.icon}</div>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-accent-light h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white/5 rounded-xl">
          <h3 className="text-xl font-bold text-primary-light mb-4">Metodologías y Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Metodologías Ágiles</h4>
              <p className="text-gray-400">Scrum, Kanban, Gestión de proyectos</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Trabajo en Equipo</h4>
              <p className="text-gray-400">Comunicación efectiva, Colaboración, Resolución de problemas</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
