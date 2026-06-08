import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Settings, HardHat, Factory } from 'lucide-react';

const categories = [
  {
    title: "Instalaciones y Montajes",
    icon: Wrench,
    items: [
      "Diseño y supervisión eléctricas",
      "Montajes electromecánicos y estructuras metálicas",
      "Instalaciones de tuberías",
      "Aplicación de soldaduras y fabricación de ductos",
      "Montaje e instalación de maquinaria"
    ],
    image: "https://sensible-spoonbill-485.convex.cloud/api/storage/1d1e3c4c-7157-4c7d-8670-93e7d1b012b0"
  },
  {
    title: "Mantenimiento Industrial",
    icon: Settings,
    items: [
      "Iluminación y alumbrado industrial",
      "Tableros de distribución y CCMs",
      "Motores eléctricos y arrancadores",
      "Bombas centrífugas",
      "Equipos agroindustriales",
      "Sistemas de filtración"
    ],
    image: "https://sensible-spoonbill-485.convex.cloud/api/storage/181a62d2-fe7a-419f-b0a8-0eb034160f2f"
  },
  {
    title: "Construcción y Obra Civil",
    icon: HardHat,
    items: [
      "Construcción de obra civil",
      "Impermeabilizaciones",
      "Diseño arquitectónico"
    ],
    image: "https://sensible-spoonbill-485.convex.cloud/api/storage/af924c5d-855b-4993-b45f-1091e86d8f91"
  },
  {
    title: "Procesos Especializados",
    icon: Factory,
    items: [
      "Rolado, corte y doblez de lámina en acero al carbón / inoxidable",
      "Supervisión técnica de proyectos"
    ],
    image: "https://sensible-spoonbill-485.convex.cloud/api/storage/5f7b754f-701b-4e77-a084-94f05aceb3e3"
  }
];

export default function CapacidadTecnica() {
  return (
    <section id="capacidad" className="py-32 bg-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f0f7ff] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a192f] leading-tight mb-6">
              Nuestra <span className="text-orange-500 relative">
                Capacidad Técnica
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </svg>
              </span> y Operativa
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Respaldamos nuestros proyectos con infraestructura sólida, tecnología avanzada y un equipo altamente capacitado para garantizar resultados excepcionales en cada especialidad.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-32">
          {categories.map((category, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Section - Natural layout without hard cards */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative aspect-[4/3] w-full group">
                  {/* Decorative background shape */}
                  <div className={`absolute inset-0 translate-x-4 translate-y-4 rounded-[40px] bg-gradient-to-tr ${index % 2 === 0 ? 'from-[#0a192f] to-[#1e3a5f]' : 'from-orange-500 to-yellow-400'} opacity-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6`} />
                  
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="relative z-10 w-full h-full object-cover rounded-[40px] shadow-xl"
                  />
                  
                  {/* Floating Icon */}
                  <div className={`absolute -top-6 ${index % 2 === 0 ? '-left-6' : '-right-6'} z-20 w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-[#0a192f] text-white' : 'bg-orange-500 text-white'}`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-[#0a192f] mb-8 relative inline-block">
                  {category.title}
                  <div className="absolute -bottom-3 left-0 w-12 h-1.5 bg-[#60a5fa] rounded-full" />
                </h3>
                
                <ul className="space-y-5 mt-8">
                  {category.items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex items-start text-lg text-slate-700 group"
                    >
                      <span className="mr-4 mt-1.5 flex-shrink-0 text-orange-500 group-hover:text-[#60a5fa] transition-colors duration-300">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7L4.5 10.5L13 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
