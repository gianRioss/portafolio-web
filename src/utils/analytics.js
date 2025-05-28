import ReactGA from 'react-ga4';

// Inicializar Google Analytics
export const initGA = () => {
  ReactGA.initialize('G-KHGKD7WD8W');
};

// Función para rastrear vistas de página
export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

// Función para rastrear eventos
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
}; 