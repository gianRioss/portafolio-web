import ReactGA from 'react-ga4';

// Inicializar Google Analytics
export const initGA = () => {
  ReactGA.initialize('G-KHGKD7WD8W', {
    gaOptions: {
      siteSpeedSampleRate: 100
    },
    gtagOptions: {
      send_page_view: true
    }
  });
};

// Función para rastrear vistas de página
export const trackPageView = (page) => {
  const path = page === '/' ? '/portafolio-web/' : `/portafolio-web${page}`;
  ReactGA.send({ 
    hitType: "pageview", 
    page: path,
    title: document.title
  });
};

// Función para rastrear eventos
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
    nonInteraction: false,
    transport: 'beacon'
  });
}; 