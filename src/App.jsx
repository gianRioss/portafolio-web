import { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechStack from './components/TechStack';
import { fadeIn, parallaxEffect, projectHoverEffect } from './utils/animations';
import { Fade } from 'react-awesome-reveal';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';
import Experience from './components/Experience';

function App() {
  const headerRef = useRef(null);

  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    scrollElements.forEach(el => observer.observe(el));
    parallaxEffect();
    projectHoverEffect();

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: '🧠 Análisis de Desgaste Laboral - IBM HR Analytics',
      description: 'Exploración y modelado predictivo sobre datos sintéticos de IBM para detectar causas de deserción laboral. Incluye visualizaciones, limpieza y un modelo de árbol de decisión.',
      image: '/imagen-analisis-desgaste.png',
      imageAlt: 'Gráfico del análisis de desgaste laboral de IBM HR Analytics',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn'],
      githubLink: 'https://github.com/gianRioss/ibm-rrhh-attrition-analysis',
      demoLink: '#'
    },
    {
      id: 2,
      title: '💳 Análisis de Billeteras Virtuales en Argentina (2019–2024)',
      description: 'Proyecto con +100.000 transacciones simuladas. Incluye segmentación por edad, género y provincia, visualizaciones en Power BI y métricas clave sobre adopción digital.',
      image: '/imagen-billeteras-virtuales.png',
      imageAlt: 'Gráfico del análisis de billeteras virtuales en Argentina',
      technologies: ['Python', 'SQL', 'Power BI', 'Excel'],
      githubLink: 'https://github.com/gianRioss/billeteras-virtuales-argentina',
      demoLink: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects projects={projects} />
          <Experience />
          <TechStack />
          <Contact />
        </main>

        <footer className="text-center text-gray-400 text-sm p-6 bg-white dark:bg-slate-900 transition-colors duration-300 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Gianmarco Ríos. Todos los derechos reservados.</p>
          <div className="mt-4 flex justify-center space-x-4 flex-wrap gap-2">
            <img src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python Badge" />
            <img src="https://img.shields.io/badge/SQL-000000?style=for-the-badge&logo=mysql&logoColor=white" alt="SQL Badge" />
            <img src="https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=power%20bi&logoColor=black" alt="Power BI Badge" />
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Badge" />
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git Badge" />
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App; 