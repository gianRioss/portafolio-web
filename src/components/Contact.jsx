/* eslint-disable no-unused-vars */
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  email: yup.string().email("Debe ser un email válido").required("El email es requerido"),
  subject: yup.string().required("El asunto es requerido"),
  message: yup.string().required("El mensaje es requerido"),
}).required();

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Gianmarco Ríos'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarme. Te responderé lo antes posible.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#4F46E5',
        background: '#1F2937',
        color: '#fff'
      });

      reset();
    } catch (error) {
      console.error('Error al enviar el email:', error);
      await Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: '#4F46E5',
        background: '#1F2937',
        color: '#fff'
      });
    }
  };

  return (
    <motion.section
      id="contacto"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="section-title">Contacto</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? ¡Hablemos sobre tu proyecto!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <a 
                  href="mailto:gianluca132203@gmail.com"
                  className="flex items-start space-x-4 group"
                >
                  <div className="text-accent-light group-hover:text-accent transition-colors duration-300 mt-1 hover:scale-110">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-accent-light transition-colors duration-300">
                      Email
                    </h4>
                    <p className="text-gray-300">
                      gianluca132203@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/gianmarco-mauricio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="text-accent-light group-hover:text-accent transition-colors duration-300 mt-1 hover:scale-110">
                    <FaLinkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-accent-light transition-colors duration-300">
                      LinkedIn
                    </h4>
                    <p className="text-gray-300">
                      gianmarco-mauricio
                    </p>
                  </div>
                </a>

                <a 
                  href="https://github.com/gianRioss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="text-accent-light group-hover:text-accent transition-colors duration-300 mt-1 hover:scale-110">
                    <FaGithub className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-accent-light transition-colors duration-300">
                      GitHub
                    </h4>
                    <p className="text-gray-300">
                      gianRioss
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="text-accent-light mt-1 hover:scale-110">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Ubicación
                    </h4>
                    <p className="text-gray-300">
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <a
                    href="/cv.pdf"
                    download="CV_Gianmarco_Rios.pdf"
                    className="group flex items-center justify-center gap-3 bg-gradient-to-r from-accent-light to-accent hover:from-accent hover:to-accent-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <FaFileDownload className="text-xl group-hover:animate-bounce" />
                    <span>Ver CV</span>
                  </a>
                  <p className="text-sm text-gray-400 text-center mt-2">
                    Última actualización: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name")}
                  className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-light focus:border-transparent transition-colors duration-300`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
                  className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-light focus:border-transparent transition-colors duration-300`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  {...register("subject")}
                  className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${errors.subject ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-light focus:border-transparent transition-colors duration-300`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  {...register("message")}
                  rows="4"
                  className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${errors.message ? 'border-red-500' : 'border-white/20'} text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-light focus:border-transparent transition-colors duration-300`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-accent-light hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
