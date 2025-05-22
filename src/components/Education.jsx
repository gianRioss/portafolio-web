import React from 'react';
import { FaGraduationCap, FaBook, FaLaptopCode } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="formacion"
      className="max-w-6xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="card">
        <h2 className="section-title">Formación Académica</h2>
        <div className="space-y-12">
          <div className="relative pl-8 border-l-4 border-primary-light">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center">
              <FaGraduationCap className="text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary-light">Tecnicatura en Ciencia de Datos e Inteligencia Artificial</h3>
              <p className="text-xl text-text-light">ISTEA (Instituto Superior Tecnológico Empresarial Argentino)</p>
              <p className="text-text-light">En curso</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-4 border-accent-light">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent-light flex items-center justify-center">
              <FaLaptopCode className="text-white" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent-light">Cursos de Programación</h3>
              <div className="space-y-3">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg">Programación Web y Python</h4>
                  <p className="text-text-light">Jorge Llovet</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg">UX/UI y Testing QA</h4>
                  <p className="text-text-light">Centro Universitario de Vicente López</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg">Community Manager</h4>
                  <p className="text-text-light">Santiago Rainero</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pl-8 border-l-4 border-secondary">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
              <FaBook className="text-white" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Certificaciones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg">Power BI</h4>
                  <p className="text-text-light">Microsoft</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg">SQL</h4>
                  <p className="text-text-light">DataCamp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 