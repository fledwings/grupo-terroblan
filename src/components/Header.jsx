import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { solutionsData } from '../data/solutionsData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
    setIsLegalOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      setIsSolutionsOpen(false);
      setIsLegalOpen(false);
    }
  }, [isOpen]);

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between md:justify-start">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="-ml-2" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menú</span>
            </Button>
          </div>

          {/* Logo */}
          <div className="flex items-center cursor-pointer ml-auto md:ml-0" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
            <img src="https://sensible-spoonbill-485.convex.cloud/api/storage/c8b5ff87-c46c-4113-845b-d9cb60c0cd2c" alt="Grupo Terroblan" className="h-10 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            <button onClick={() => scrollTo('about')} className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Nosotros</button>
            <button onClick={() => scrollTo('ventajas')} className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Ventajas</button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors outline-none">
                  Soluciones <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white shadow-md border-slate-200 mt-1 z-[100]" align="start">
                <DropdownMenuItem 
                  asChild 
                  onSelect={(e) => {
                    setTimeout(() => {
                      scrollTo('solutions');
                    }, 150);
                  }} 
                  className="cursor-pointer font-medium text-orange-600 focus:text-orange-700 hover:bg-orange-50 focus:bg-orange-50 mb-1"
                >
                  <button className="w-full text-left font-semibold">
                    Ver todas las soluciones
                  </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-100" />
                <div className="max-h-[60vh] overflow-y-auto py-1">
                  {solutionsData.map((solution) => (
                    <DropdownMenuItem 
                      key={solution.id} 
                      asChild 
                      onSelect={(e) => {
                        setTimeout(() => {
                          navigate(`/solutions/${solution.id}`);
                          window.scrollTo(0, 0);
                        }, 150);
                      }}
                      className="cursor-pointer text-slate-600 focus:text-orange-600 hover:bg-slate-50 focus:bg-slate-50 py-2"
                    >
                      <button className="w-full text-left">
                        {solution.title}
                      </button>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <button onClick={() => scrollTo('clients')} className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Clientes</button>
            <button onClick={() => scrollTo('locations')} className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Ubicaciones</button>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center ml-6">
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => scrollTo('contact')}
            >
              Contacto
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar (Simple Sheet) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 md:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-[70] w-[300px] sm:w-[400px] bg-white shadow-xl md:hidden flex flex-col"
            >
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center">
                  <img src="https://sensible-spoonbill-485.convex.cloud/api/storage/c8b5ff87-c46c-4113-845b-d9cb60c0cd2c" alt="Grupo Terroblan" className="h-8 w-auto" />
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Cerrar menú</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 p-6 overflow-y-auto">
                <button onClick={() => scrollTo('about')} className="text-left text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors">Nosotros</button>
                <button onClick={() => scrollTo('ventajas')} className="text-left text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors">Ventajas</button>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)} 
                    className="flex items-center justify-between text-left text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    Soluciones
                    {isSolutionsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-3 pl-4 pt-2 overflow-hidden"
                      >
                        <button 
                          onClick={() => scrollTo('solutions')} 
                          className="text-left text-base font-semibold text-orange-600 hover:text-orange-700 transition-colors mb-1"
                        >
                          Ver todas las soluciones
                        </button>
                        {solutionsData.map((solution) => (
                          <button 
                            key={solution.id}
                            onClick={() => {
                              navigate(`/solutions/${solution.id}`);
                              window.scrollTo(0, 0);
                              setIsOpen(false);
                            }} 
                            className="text-left text-base text-slate-500 hover:text-orange-500 transition-colors"
                          >
                            {solution.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button onClick={() => scrollTo('clients')} className="text-left text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors">Clientes</button>
                <button onClick={() => scrollTo('locations')} className="text-left text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors">Ubicaciones</button>
                
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setIsLegalOpen(!isLegalOpen)} 
                    className="flex items-center justify-between text-left text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    Aspectos legales
                    {isLegalOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  
                  <AnimatePresence>
                    {isLegalOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-3 pl-4 pt-2 overflow-hidden"
                      >
                        <button onClick={() => { setIsOpen(false); setPrivacyOpen(true); }} className="text-left text-base text-slate-500 hover:text-orange-500 transition-colors">Políticas de Privacidad</button>
                        <button onClick={() => { setIsOpen(false); setConditionsOpen(true); }} className="text-left text-base text-slate-500 hover:text-orange-500 transition-colors">Condiciones de Uso</button>
                        <button onClick={() => { setIsOpen(false); setTermsOpen(true); }} className="text-left text-base text-slate-500 hover:text-orange-500 transition-colors">Términos y Condiciones</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Button 
                  className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => scrollTo('contact')}
                >
                  Contacto
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Dialogs for Legal Sections */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-800 text-slate-300 w-[90vw] z-[100]">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">Políticas de Privacidad</DialogTitle>
            <DialogDescription className="text-slate-400">
              Información sobre cómo manejamos y protegemos tus datos.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4 text-sm">
            <p>En Grupo Terroblan Industrial, nos tomamos muy en serio la privacidad de tus datos. Esta política describe qué información recopilamos, cómo la usamos y cómo la protegemos.</p>
            
            <h3 className="font-semibold text-white text-base">1. Recopilación de Información</h3>
            <p>Recopilamos información cuando te comunicas con nosotros, solicitas una cotización o interactúas con nuestras plataformas. La información puede incluir tu nombre, correo electrónico, número de teléfono y detalles de tu empresa.</p>
            
            <h3 className="font-semibold text-white text-base">2. Uso de la Información</h3>
            <p>La información recopilada se utiliza exclusivamente para: proveer nuestros servicios, responder a tus consultas, mejorar nuestro sitio web y enviarte información relevante sobre Grupo Terroblan Industrial.</p>
            
            <h3 className="font-semibold text-white text-base">3. Protección de Datos</h3>
            <p>Implementamos diversas medidas de seguridad para proteger tu información personal. No vendemos, intercambiamos ni transferimos a terceros tu información personal identificable sin tu consentimiento explícito.</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={conditionsOpen} onOpenChange={setConditionsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-800 text-slate-300 w-[90vw] z-[100]">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">Condiciones de Uso</DialogTitle>
            <DialogDescription className="text-slate-400">
              Reglas aplicables al uso de nuestro sitio web.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4 text-sm">
            <p>Al acceder y utilizar este sitio web de Grupo Terroblan Industrial, aceptas cumplir con las siguientes condiciones de uso. Si no estás de acuerdo con alguna parte, por favor abstente de utilizar nuestro sitio.</p>
            
            <h3 className="font-semibold text-white text-base">1. Uso del Sitio</h3>
            <p>El contenido de este sitio web es para información general y uso profesional. Está sujeto a cambios sin previo aviso.</p>
            
            <h3 className="font-semibold text-white text-base">2. Propiedad Intelectual</h3>
            <p>Todo el contenido, diseño, gráficos y materiales en este sitio son propiedad de Grupo Terroblan Industrial. Queda estrictamente prohibida su reproducción sin autorización previa y por escrito.</p>
            
            <h3 className="font-semibold text-white text-base">3. Exactitud de la Información</h3>
            <p>Nos esforzamos por mantener la información actualizada y correcta, pero no garantizamos la exactitud, integridad o idoneidad de la información y los materiales encontrados en el sitio para ningún propósito particular.</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-800 text-slate-300 w-[90vw] z-[100]">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">Términos y Condiciones</DialogTitle>
            <DialogDescription className="text-slate-400">
              Condiciones generales de nuestros servicios y operaciones.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4 text-sm">
            <p>Estos Términos y Condiciones rigen la prestación de servicios, maquinaria y productos por parte de Grupo Terroblan Industrial a sus clientes.</p>
            
            <h3 className="font-semibold text-white text-base">1. Prestación de Servicios</h3>
            <p>Grupo Terroblan Industrial se compromete a ejecutar los proyectos y proporcionar servicios con los más altos estándares de calidad, seguridad y cumplimiento normativo.</p>
            
            <h3 className="font-semibold text-white text-base">2. Cotizaciones y Contratos</h3>
            <p>Toda cotización tiene una vigencia limitada y está sujeta a los términos específicos establecidos en el contrato correspondiente. Los alcances y plazos se definirán de mutuo acuerdo antes del inicio de cualquier obra.</p>
            
            <h3 className="font-semibold text-white text-base">3. Responsabilidad y Garantías</h3>
            <p>Garantizamos la calidad de nuestro trabajo según los términos acordados. Nuestra responsabilidad se limita a las condiciones estipuladas en los contratos individuales firmados con cada cliente.</p>
            
            <h3 className="font-semibold text-white text-base">4. Ley Aplicable</h3>
            <p>Estos términos se rigen por las leyes aplicables en los Estados Unidos Mexicanos y cualquier controversia será sometida a la jurisdicción de los tribunales competentes en el estado de Querétaro.</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
