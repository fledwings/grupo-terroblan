import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { solutionsData } from '../data/solutionsData';

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

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Portafolio de Soluciones</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales diseñadas para atender las necesidades de nuestros clientes con calidad, eficiencia, seguridad y sostenibilidad.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {solutionsData.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Link to={`/solutions/${solution.id}`} className="block h-full">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-slate-200 overflow-hidden group cursor-pointer flex flex-col">
                    <div className="h-2 w-full bg-slate-100 group-hover:bg-slate-200 transition-colors shrink-0 z-10 relative">
                      <div className={`h-full w-1/3 ${solution.color.split(' ')[0]} transition-all duration-500 group-hover:w-full`} />
                    </div>
                    
                    {/* Featured Image Section */}
                    <div className="h-48 w-full relative overflow-hidden bg-slate-100 shrink-0 border-b border-slate-100">
                      {solution.images && solution.images.length > 0 ? (
                        <img 
                          src={solution.images[0]} 
                          alt={solution.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50">
                          <IconComponent className="h-10 w-10 mb-2 opacity-40" />
                          <span className="text-xs font-medium uppercase tracking-wider">Imagen de Proyecto</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardHeader className="pb-4 shrink-0 relative z-10">
                      <div className="flex flex-col items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${solution.color} -mt-10 shadow-lg border-4 border-white`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-900 leading-tight">
                          {solution.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3 mt-1">
                        {solution.items.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                            <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <span className="text-sm font-semibold text-orange-500 group-hover:text-orange-600 transition-colors flex items-center gap-1">
                        Ver detalles
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}