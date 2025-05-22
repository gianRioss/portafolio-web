import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verificar si el usuario tiene una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-4 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun className="text-yellow-500 text-2xl" />
      ) : (
        <FaMoon className="text-blue-600 text-2xl" />
      )}
    </motion.button>
  );
} 