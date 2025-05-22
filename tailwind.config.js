/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue
          dark: '#2563EB',    // Darker blue
          light: '#60A5FA'    // Lighter blue
        },
        accent: {
          DEFAULT: '#10B981', // Emerald
          dark: '#98F6E0',    // Much lighter emerald for excellent contrast in dark mode
          light: '#34D399'    // Lighter emerald
        },
        background: {
          light: '#F8FAFC',   // Light mode background
          dark: '#0F172A'     // Dark mode background
        },
        surface: {
          light: '#FFFFFF',   // Light mode surface
          dark: '#1E293B'     // Dark mode surface
        },
        text: {
          light: {
            primary: '#1E293B',   // Dark blue-gray
            secondary: '#4B5563'  // Darker gray for better contrast
          },
          dark: {
            primary: '#F8FAFC',   // Almost white
            secondary: '#E5E7EB'  // Even lighter gray for improved contrast in dark mode
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'bounce': 'bounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};
