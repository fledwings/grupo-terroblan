import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Flag, CheckCircle2, ShieldCheck, Lightbulb, Users, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  { name: 'Calidad', icon: CheckCircle2, desc: 'Ejecutamos cada proyecto con los mas altos estándares técnicos y de seguridad.' },
  { name: 'Compromiso', icon: ShieldCheck, desc: 'Somos una empresa familiar que cumple con la palabra dada a clientes, proveedores y colaboradores.' },
  { name: 'Innovación', icon: Lightbulb, desc: 'Buscamos soluciones eficientes y sustentables, incorporamos nuevas tecnologias.' },
  { name: 'Trabajo en Equipo', icon: Users, desc: 'Valoramos la colaboracion y el respeto mutuo como base de nuestro crecimiento.' },
  { name: 'Sostenibilidad', icon: Leaf, desc: 'Operamos con responsabilidad social y ambiental, contribuyendo al cuidado del medio ambiente.' },
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

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nosotros</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Iniciamos operaciones como una empresa familiar ofreciendo servicios de obra civil, eléctrica y mecánica a la industria. Hoy nos consolidamos como un socio estratégico de nuestros clientes.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Mission & Vision */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex gap-6 items-start">
                <div className="hidden md:flex w-16 h-16 rounded-2xl bg-orange-50 items-center justify-center shrink-0">
                  <Flag className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3 md:mb-2">
                    <Flag className="h-6 w-6 text-orange-600 md:hidden" />
                    <h3 className="text-2xl font-bold text-slate-900">Misión</h3>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Brindar soluciones integrales con calidad, seguridad y compromiso construyendo relaciones de confianza que impulsen el crecimiento de nuestros clientes y el desarrollo sostenible de nuestra organizacion.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex gap-6 items-start">
                <div className="hidden md:flex w-16 h-16 rounded-2xl bg-blue-50 items-center justify-center shrink-0">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3 md:mb-2">
                    <Eye className="h-6 w-6 text-blue-600 md:hidden" />
                    <h3 className="text-2xl font-bold text-slate-900">Visión</h3>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Ser una empresa lider en servicios industriales en Mexico, reconocida por su excelencia operativa, confiablidad y capacidad para generar valor sostenible a nuestros clientes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Context (Nuestra Empresa) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Nuestra Evolución</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:to-blue-500">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-orange-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-900 text-lg">Inicios</h4>
                    <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">2022</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Operaciones como empresa familiar ofreciendo servicios a la industria.
                  </p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-blue-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-900 text-lg">Consolidación</h4>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Socio estratégico, ampliando cartera en sectores industrial y comercial.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900">Nuestros Valores</h3>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50/50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center mb-4 text-white shadow-sm">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{value.name}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
