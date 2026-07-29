import React from 'react';

// Importación de imágenes (TypeScript reconoce estas rutas si tienes configurado el módulo de assets)
import aboutImage from '../assets/about-hero.jpg';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';

export const AboutSection: React.FC = () => {
  const avatars: string[] = [avatar1, avatar2, avatar3];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Badge Superior */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-lime-300 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
            <svg 
              className="w-4 h-4" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v11a4 4 0 004 4h8a4 4 0 004-4V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm-2 5V6a2 2 0 114 0v1h-4z" />
            </svg>
            <span>ABOUT US</span>
          </div>
        </div>

        {/* Encabezado Principal */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center uppercase tracking-tight max-w-4xl mx-auto leading-tight mb-16">
          WE BELIEVE FITNESS ISN’T JUST ABOUT LIFTING WEIGHTS IT’S ABOUT BUILDING
        </h2>

        {/* Contenido en 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Métricas y Texto */}
          <div className="flex flex-col justify-center">
            
            {/* Stat: 15+ Experience */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-6xl md:text-7xl font-black tracking-tight leading-none">
                15+
              </span>
              <span className="text-xs font-bold uppercase tracking-wider leading-tight max-w-[120px] text-gray-900">
                PROFESSIONAL<br />EXPERIENCE
              </span>
            </div>

            <hr className="border-gray-200 mb-6" />

            {/* Párrafos descriptivos */}
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed mb-8">
              <p>
                We combine advanced training techniques, personalized programs, and cutting-edge equipment to deliver a premium fitness experience. Whether your goal is strength.
              </p>
              <p>
                We don't just train bodies — we train mindsets. Step inside and experience a fitness journey built around focus.
              </p>
            </div>

            {/* Fila Inferior: Botón CTA y Reviews */}
            <div className="flex flex-wrap items-center gap-6">
              
              {/* Botón About Us */}
              <button 
                type="button"
                className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-6 py-3 rounded-full transition-colors text-xs tracking-wider uppercase cursor-pointer"
              >
                <span>ABOUT US</span>
                <span className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs">
                  &gt;&gt;
                </span>
              </button>

              {/* Reviews y Avatares */}
              <div className="flex items-center gap-3">
                {/* Avatares superpuestos */}
                <div className="flex -space-x-2">
                  {avatars.map((imgSrc: string, index: number) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`User Reviewer Avatar ${index + 1}`}
                      className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>

                {/* Estrellas y Conteo */}
                <div className="flex flex-col">
                  <div className="flex text-amber-400 text-sm">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    (1k+ Reviews)
                  </span>
                </div>
              </div>

            </div>

          </div>

          {}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Fitness Athlete with Shaker"
              className="w-full h-[450px] md:h-[520px] object-cover rounded-2xl shadow-sm"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;