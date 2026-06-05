import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, User, FileText, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function ContactCTA() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16 space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para empezar su proyecto?</h2>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              Póngase en contacto con nuestro equipo de expertos. Estamos listos para ofrecerle las mejores soluciones industriales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto" onClick={() => navigate('/contacto')}>
              <Briefcase className="mr-2 h-5 w-5" />
              Solicitar servicio
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-200" onClick={() => navigate('/contacto')}>
              Contacto general
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full hover:bg-slate-800/80 transition-colors">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-slate-700 flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Atención Personalizada</h3>
                <p className="text-lg text-white">Ing. Arturo Trejo</p>
                <p className="text-sm text-white">Asesoría directa para su proyecto</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full hover:bg-slate-800/80 transition-colors">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-slate-700 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Llámenos</h3>
                <a href="tel:4426767696" className="text-lg font-medium text-white hover:text-orange-400 transition-colors block">
                  442-676-7696
                </a>
                <p className="text-sm text-white">Lunes a Viernes, 9:00 - 18:00</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-slate-800 border-slate-700 h-full hover:bg-slate-800/80 transition-colors">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-slate-700 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Escríbanos</h3>
                <a href="mailto:arturo.trejo@grupoter.com.mx" className="text-md font-medium text-white hover:text-orange-400 transition-colors block break-all">
                  arturo.trejo@grupoter.com.mx
                </a>
                <p className="text-sm text-white">Respuestas en menos de 24h</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
