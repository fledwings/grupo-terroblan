import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Iberdrola México', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/47852d88-b64b-45ce-a754-4beed4a2faac' },
  { name: 'OMYA Mexico', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/91f3796e-99e3-4ed6-9885-1c5a8b146ff3' }, 
  { name: 'PPG', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/f9be1d9f-379a-44c6-a2ab-a269feb80d39' }, 
  { name: 'Kimberly-Clark', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/e00c5668-4763-4712-ba05-09c5d9502fda' }, 
  { name: 'Veolia', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/99140b52-6af6-4af8-b672-2a22384bcb5d' }, 
  { name: 'Cartones Ponderosa', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/0387a02f-9e40-46e4-9f3d-572ca1df9cb7' }, 
  { name: 'CAQ', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/8010fee4-9a3f-4c7b-96cc-985075e3ef60' }, 
  { name: 'Cheersson', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/4baed3a3-4d0c-4b92-811d-8ff89d411f95' }, 
  { name: 'Niuco', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/c4bf5b15-45cf-4db1-9cf8-b4b4c511f83f' }, 
  { name: 'Tío Beto', logo: 'https://sensible-spoonbill-485.convex.cloud/api/storage/99831427-de3d-4291-a507-f12106efb378' }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
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
              className={`px-6 py-4 bg-white rounded-lg border border-slate-200 shadow-sm text-center min-w-[140px] flex-grow md:flex-grow-0 flex items-center justify-center ${client.logo ? 'min-h-[74px]' : 'h-[74px]'}`}
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="h-14 md:h-16 w-auto scale-125 object-contain" />
              ) : (
                <span className="font-semibold text-slate-700 whitespace-nowrap">{client.name}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
