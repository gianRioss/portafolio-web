import { useState, useEffect } from 'react';
import { smoothScroll } from '../utils/animations';

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleScroll = (target) => {
    try {
      smoothScroll(target);
      setIsOpen(false);
    } catch (error) {
      console.error('Error al hacer scroll:', error);
    }
  };

  const navLinks = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#sobre-mi', text: 'Sobre mí' },
    { href: '#formacion', text: 'Formación' },
    { href: '#habilidades', text: 'Habilidades' },
    { href: '#proyectos', text: 'Proyectos' },
    { href: '#contacto', text: 'Contacto' }
  ];

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(link.href);
                  }}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen
                  ? <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  : <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.href);
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
