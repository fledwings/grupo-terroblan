import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const locations = [
  { city: 'San Juan del Río', state: 'Querétaro' },
  { city: 'Zapopan', state: 'Jalisco' },
  { city: 'Mérida', state: 'Yucatán' },
  { city: 'Estado', state: 'Coahuila' },
  { city: 'Estado', state: 'Nuevo León' },
  { city: 'Estado', state: 'Puebla' },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Cobertura Nacional</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Presencia estratégica en las principales zonas industriales de México.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <MapPin className="h-6 w-6 text-orange-500 mb-2" />
                  <span className="font-semibold text-slate-900 text-sm">{loc.city !== 'Estado' ? loc.city : loc.state}</span>
                  {loc.city !== 'Estado' && (
                    <span className="text-xs text-slate-500">{loc.state}</span>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
