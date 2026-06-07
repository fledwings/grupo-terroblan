import React from 'react';
import { HardHat, Phone, Mail, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-white py-12 border-t border-gray-200 text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://sensible-spoonbill-485.convex.cloud/api/storage/6b22e3c3-3e35-4e6b-a193-ba4499b27820" 
                alt="Grupo Terroblan" 
                className="h-12 w-auto rounded-xl" 
              />
            </div>
            <p className="text-sm">
              Construimos confianza, creamos futuro. Soluciones integrales para la industria.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-black font-semibold">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <a href="tel:4426767696" className="hover:text-orange-600 transition-colors">442-676-7696</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <a href="mailto:arturo.trejo@grupoter.com.mx" className="hover:text-orange-600 transition-colors">arturo.trejo@grupoter.com.mx</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-black font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo('about')} className="hover:text-orange-600 transition-colors">Nosotros</button></li>
              <li><button onClick={() => scrollTo('solutions')} className="hover:text-orange-600 transition-colors">Soluciones</button></li>
              <li><button onClick={() => scrollTo('locations')} className="hover:text-orange-600 transition-colors">Ubicaciones</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-orange-600 transition-colors">Contacto</button></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {currentYear} Grupo Terroblan Industrial. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-black">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-orange-600 transition-colors">Políticas de Privacidad</button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white border-gray-200 text-black">
                <DialogHeader>
                  <DialogTitle className="text-black text-xl">Políticas de Privacidad</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Información sobre cómo manejamos y protegemos tus datos.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4 text-sm">
                  <p>En Grupo Terroblan Industrial, nos tomamos muy en serio la privacidad de tus datos. Esta política describe qué información recopilamos, cómo la usamos y cómo la protegemos.</p>
                  
                  <h3 className="font-semibold text-black text-base">1. Recopilación de Información</h3>
                  <p>Recopilamos información cuando te comunicas con nosotros, solicitas una cotización o interactúas con nuestras plataformas. La información puede incluir tu nombre, correo electrónico, número de teléfono y detalles de tu empresa.</p>
                  
                  <h3 className="font-semibold text-black text-base">2. Uso de la Información</h3>
                  <p>La información recopilada se utiliza exclusivamente para: proveer nuestros servicios, responder a tus consultas, mejorar nuestro sitio web y enviarte información relevante sobre Grupo Terroblan Industrial.</p>
                  
                  <h3 className="font-semibold text-black text-base">3. Protección de Datos</h3>
                  <p>Implementamos diversas medidas de seguridad para proteger tu información personal. No vendemos, intercambiamos ni transferimos a terceros tu información personal identificable sin tu consentimiento explícito.</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-orange-600 transition-colors">Condiciones de Uso</button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white border-gray-200 text-black">
                <DialogHeader>
                  <DialogTitle className="text-black text-xl">Condiciones de Uso</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Reglas aplicables al uso de nuestro sitio web.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4 text-sm">
                  <p>Al acceder y utilizar este sitio web de Grupo Terroblan Industrial, aceptas cumplir con las siguientes condiciones de uso. Si no estás de acuerdo con alguna parte, por favor abstente de utilizar nuestro sitio.</p>
                  
                  <h3 className="font-semibold text-black text-base">1. Uso del Sitio</h3>
                  <p>El contenido de este sitio web es para información general y uso profesional. Está sujeto a cambios sin previo aviso.</p>
                  
                  <h3 className="font-semibold text-black text-base">2. Propiedad Intelectual</h3>
                  <p>Todo el contenido, diseño, gráficos y materiales en este sitio son propiedad de Grupo Terroblan Industrial. Queda estrictamente prohibida su reproducción sin autorización previa y por escrito.</p>
                  
                  <h3 className="font-semibold text-black text-base">3. Exactitud de la Información</h3>
                  <p>Nos esforzamos por mantener la información actualizada y correcta, pero no garantizamos la exactitud, integridad o idoneidad de la información y los materiales encontrados en el sitio para ningún propósito particular.</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-orange-600 transition-colors">Términos y Condiciones</button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white border-gray-200 text-black">
                <DialogHeader>
                  <DialogTitle className="text-black text-xl">Términos y Condiciones</DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Condiciones generales de nuestros servicios y operaciones.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4 text-sm">
                  <p>Estos Términos y Condiciones rigen la prestación de servicios, maquinaria y productos por parte de Grupo Terroblan Industrial a sus clientes.</p>
                  
                  <h3 className="font-semibold text-black text-base">1. Prestación de Servicios</h3>
                  <p>Grupo Terroblan Industrial se compromete a ejecutar los proyectos y proporcionar servicios con los más altos estándares de calidad, seguridad y cumplimiento normativo.</p>
                  
                  <h3 className="font-semibold text-black text-base">2. Cotizaciones y Contratos</h3>
                  <p>Toda cotización tiene una vigencia limitada y está sujeta a los términos específicos establecidos en el contrato correspondiente. Los alcances y plazos se definirán de mutuo acuerdo antes del inicio de cualquier obra.</p>
                  
                  <h3 className="font-semibold text-black text-base">3. Responsabilidad y Garantías</h3>
                  <p>Garantizamos la calidad de nuestro trabajo según los términos acordados. Nuestra responsabilidad se limita a las condiciones estipuladas en los contratos individuales firmados con cada cliente.</p>
                  
                  <h3 className="font-semibold text-black text-base">4. Ley Aplicable</h3>
                  <p>Estos términos se rigen por las leyes aplicables en los Estados Unidos Mexicanos y cualquier controversia será sometida a la jurisdicción de los tribunales competentes en el estado de Querétaro.</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
