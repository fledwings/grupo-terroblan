import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Iberdrola México', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/47852d88-b64b-45ce-a754-4beed4a2faac' },
  { name: 'OMYA Mexico', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/91f3796e-99e3-4ed6-9885-1c5a8b146ff3' }, 
  { name: 'PPG', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/f9be1d9f-379a-44c6-a2ab-a269feb80d39' }, 
  { name: 'Kimberly-Clark', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/e00c5668-4763-4712-ba05-09c5d9502fda' }, 
  { name: 'Veolia', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/99140b52-6af6-4af8-b672-2a22384bcb5d' }, 
  { name: 'Cartones Ponderosa', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/eb608843-342d-4d8d-aed2-dcc96ef30ce2' }, 
  { name: 'CAQ', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/8010fee4-9a3f-4c7b-96cc-985075e3ef60' }, 
  { name: 'Cheersson', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/4baed3a3-4d0c-4b92-811d-8ff89d411f95' }, 
  { name: 'Niuco', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/c4bf5b15-45cf-4db1-9cf8-b4b4c511f83f' }, 
  { name: 'Tío Beto', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/99831427-de3d-4291-a507-f12106efb378' },
  { name: 'Nuevo Cliente', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/be9911a1-6bce-4087-8145-ac7f3a0b8d06' }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Empresas que confían en nosotros</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all w-[140px] h-[90px] sm:w-[160px] sm:h-[100px] md:w-[180px] md:h-[110px] p-4"
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className={`max-h-full max-w-full object-contain ${client.name === 'Cartones Ponderosa' ? 'h-14 md:h-16' : 'h-12 md:h-16 scale-110'}`} />
              ) : (
                <span className="font-semibold text-slate-900 text-sm md:text-base text-center">{client.name}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}