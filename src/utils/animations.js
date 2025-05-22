// Animación de entrada para elementos
export const fadeIn = (element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';

  setTimeout(() => {
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 100);
};

// Animación de scroll suave
export const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Efecto de parallax para el header
export const parallaxEffect = () => {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
};

// Animación de escritura para el título
export const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';

  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };

  type();
};

// Efecto de hover para las tarjetas de proyectos
export const projectHoverEffect = () => {
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      project.style.transform = 'translateY(-5px)';
      project.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
    });

    project.addEventListener('mouseleave', () => {
      project.style.transform = 'translateY(0)';
      project.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
  });
};

// Animación de contador para estadísticas
export const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);

  const updateCounter = () => {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};
