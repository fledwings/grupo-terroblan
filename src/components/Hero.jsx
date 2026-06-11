import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Phone, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const PHONES = [
  { label: 'Arturo Trejo', number: '442-676-7696', tel: '4426767696' },
  { label: 'Ángel Trejo', number: '427-120-0178', tel: '4271200178' },
];

export default function Hero() {
  const containerRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative overflow-hidden bg-slate-950 min-h-[90vh] flex items-center pt-28 pb-20 lg:pt-20 lg:pb-32"
    >
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Concrete Plant Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-terroblan.jpg')" }}
        />
        
        {/* Dark blur overlay to ensure legibility */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
        
        {/* Gradient for extra depth and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10" />
        
        {/* Modern radial gradient for accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/30 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Fade/Gradient transition effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-3xl mx-auto lg:mx-0 lg:pl-12 xl:pl-24"
          >
            <div>
              <motion.h1
                variants={itemVariants}
                className="text-[2rem] min-[400px]:text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
              >
                <span className="whitespace-nowrap lg:whitespace-normal">GRUPO<span className="inline lg:hidden"> </span><br className="hidden lg:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">TERROBLAN</span></span>
                <br />
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-lg sm:text-xl lg:text-3xl mt-2 lg:mt-3 tracking-wide uppercase">
                  SERVICIOS ESPECIALIZADOS PARA LA INDUSTRIA
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="mt-4 text-base sm:text-lg lg:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light"
              >
                Grupo Terroblan Industrial es su socio estratégico en construcción, mantenimiento y servicios integrales para la industria, garantizando resultados excepcionales.
              </motion.p>
            </div>
            
            {/* Buttons: DO NOT fade out, as requested */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto mb-16 lg:mb-24"
            >
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white border-none shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all duration-300 h-12 px-8 text-base group"
                onClick={() => scrollTo('contact')}
              >
                Solicitar servicio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 hover:text-white transition-all duration-300 h-12 px-8 text-base"
                onClick={() => scrollTo('solutions')}
              >
                Nuestros servicios
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800 hover:text-white transition-all duration-300 h-12 px-8 text-base"
                  >
                    <Phone className="mr-2 h-4 w-4 text-slate-400" />
                    Llamar ahora
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {PHONES.map((p) => (
                    <DropdownMenuItem key={p.tel} asChild>
                      <a href={`tel:${p.tel}`} className="cursor-pointer">
                        <Phone className="mr-2 h-4 w-4 text-orange-600" />
                        <span className="font-medium">{p.number}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </motion.div>
          
          {/* Visual abstract graphic area */}
          <div className="hidden lg:block w-full">
            <motion.div 
              className="relative h-[500px] w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Decorative elements representing industry & precision */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central hub */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform" }}
                className="relative w-80 h-80 rounded-full border border-slate-800/80 border-dashed flex items-center justify-center"
              >
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                  className="absolute w-64 h-64 rounded-full border border-orange-500/20 flex items-center justify-center"
                >
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-2xl border border-slate-700/50">
                    <Wrench className="w-16 h-16 text-slate-600" strokeWidth={1} />
                  </div>
                </motion.div>
                
                {/* Orbiting nodes */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-800 border border-slate-600" />
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 border border-slate-600" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-800 border border-slate-600" />
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-800 border border-slate-600" />
              </motion.div>
              
              {/* Floating feature cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className="absolute top-20 left-4 bg-slate-900/95 border border-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 z-0"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Alta Seguridad</p>
                  <p className="text-xs text-slate-400">Protocolos estrictos</p>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ willChange: "transform" }}
                className="absolute bottom-20 -right-8 bg-slate-900/95 border border-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Eficiencia Óptima</p>
                  <p className="text-xs text-slate-400">Procesos ágiles</p>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ willChange: "transform" }}
                className="absolute -top-4 right-10 bg-slate-900/95 border border-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Resultados Medibles</p>
                  <p className="text-xs text-slate-400">KPIs precisos</p>
                </div>
              </motion.div>
            </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
