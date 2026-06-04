import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { solutionsData } from '../data/solutionsData';

export default function SolutionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const solution = solutionsData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!solution) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Solución no encontrada</h2>
        <Button onClick={() => navigate('/')} variant="default">
          Volver al inicio
        </Button>
      </div>
    );
  }

  const IconComponent = solution.icon;

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumb & Back button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-slate-500 hover:text-orange-500 transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Volver a inicio
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Link to="/" className="hover:text-slate-900">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">Soluciones</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-orange-600 font-medium">{solution.title}</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className={`h-4 w-full ${solution.color.split(' ')[0]}`} />
          <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shrink-0 ${solution.color}`}>
              <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {solution.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed">
                {solution.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-slate-200 shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-orange-500" />
                    Beneficios Principales
                  </h2>
                  <ul className="space-y-4">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                        <span className="text-lg text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-slate-200 shadow-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-orange-500" />
                    Casos de Uso
                  </h2>
                  <ul className="space-y-4">
                    {solution.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                        <span className="text-lg text-slate-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {solution.images && solution.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="border-slate-200 shadow-sm overflow-hidden">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Image className="w-6 h-6 text-orange-500" />
                      Galería de Proyectos
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {solution.images.map((imgSrc, idx) => (
                        <div key={idx} className="relative aspect-video rounded-xl overflow-hidden group">
                          <img 
                            src={imgSrc} 
                            alt={`Proyecto de ${solution.title} ${idx + 1}`} 
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-slate-200 shadow-sm bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16" />
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-xl font-bold mb-4">Impacto en sus Operaciones</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {solution.impact}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Servicios Incluidos</h3>
                  <ul className="space-y-3">
                    {solution.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${solution.color.split(' ')[1].replace('text-', 'bg-')}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border-orange-500 shadow-sm bg-orange-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">¿Necesita más información?</h3>
                  <p className="text-slate-600 mb-6">Contacte con nuestros especialistas para una asesoría personalizada.</p>
                  <Button onClick={() => {
                      navigate('/');
                      setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100);
                    }} 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Contactar Ahora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}