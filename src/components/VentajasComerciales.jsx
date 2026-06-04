import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Calculator, 
  Clock, 
  Headset, 
  Leaf, 
  Building, 
  Settings, 
  Zap, 
  Cog
} from 'lucide-react';

const advantages = [
  { name: 'Experiencia Integral', icon: Star, desc: 'Conocimiento y dominio en todas las fases del proyecto.' },
  { name: 'Presupuestos Competitivos', icon: Calculator, desc: 'Optimización de recursos sin sacrificar la calidad.' },
  { name: 'Cumplimiento Puntual', icon: Clock, desc: 'Entregas en tiempo y forma según los cronogramas establecidos.' },
  { name: 'Atención Personalizada', icon: Headset, desc: 'Servicio adaptado a las necesidades específicas de cada cliente.' },
  { name: 'Seguridad y Sustentabilidad', icon: Leaf, desc: 'Compromiso total con el medio ambiente y la seguridad laboral.' },
];

const capacity = [
  { name: 'Instalaciones y Montajes', icon: Zap, desc: 'Ejecución precisa de montajes industriales y estructurales.' },
  { name: 'Mantenimiento Industrial', icon: Settings, desc: 'Programas preventivos y correctivos para optimizar operaciones.' },
  { name: 'Construcción y Obra Civil', icon: Building, desc: 'Desarrollo de infraestructura civil con altos estándares.' },
  { name: 'Procesos Especializados', icon: Cog, desc: 'Soluciones técnicas a la medida de sus necesidades operativas.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function VentajasComerciales() {
  return (
    <section id="ventajas" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with blur overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105"
        style={{ backgroundImage: "url('https://sensible-spoonbill-485.convex.cloud/api/storage/7b461e0e-959b-4b58-b6f7-e42c11c5b64f')" }}
      >
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ventajas Comerciales
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Nuestro compromiso es brindar valor agregado en cada etapa de su proyecto a través de un servicio integral, eficiente y seguro.
            </p>
          </motion.div>
        </div>

        {/* 5 Main Advantages - Clean layout */}
        <div className="mb-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-16"
          >
            {advantages.map((adv, index) => (
              <motion.div key={index} variants={itemVariants} className="group flex flex-col">
                <div className="mb-6 text-orange-500">
                  <adv.icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h4 className="font-semibold text-white mb-3 text-lg leading-snug">{adv.name}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/10 mb-24"></div>

        {/* Technical Capacity */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8"
          >
            <div className="lg:col-span-4 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8">
                <Zap className="h-4 w-4 text-orange-500" />
                <span>Capacidad Técnica</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
                Infraestructura para la alta exigencia
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Contamos con la experiencia, el personal calificado y las herramientas necesarias para desarrollar proyectos industriales de cualquier escala, garantizando calidad en cada proceso.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                {capacity.map((item, index) => (
                  <div key={index} className="flex flex-col group">
                    <div className="mb-5 text-slate-500 group-hover:text-orange-500 transition-colors duration-300">
                      <item.icon className="h-8 w-8 stroke-[1.5]" />
                    </div>
                    <h4 className="font-semibold text-white text-lg mb-3">{item.name}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
