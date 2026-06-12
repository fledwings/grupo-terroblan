import { Building2, Settings2, Wrench, Package } from 'lucide-react';
import albanileriaImg from '@/assets/terroblan-albanileria.jpg';
import tuberiaImg from '@/assets/terroblan-tuberia-v2.jpg';
import fabricacionSoldaduraImg from '@/assets/terroblan-fabricacion-soldadura-v2.jpg';
import mantenimientoImg from '@/assets/terroblan-mantenimiento-2.jpg';
import mantenimientoIndustrialImg from '@/assets/terroblan-mantenimiento-industrial-2.jpg';
import servicios1Img from '@/assets/terroblan-servicios-1.jpg';
import servicios2Img from '@/assets/terroblan-servicios-2.jpg';

export const solutionsData = [
  {
    id: 'construccion-y-montaje',
    title: 'Construcción y Montaje',
    icon: Building2,
    color: 'bg-blue-100 text-blue-700',
    items: [
      'Obra Civil.',
      'Montajes electromecánicos.',
      'Instalaciones eléctricas.'
    ],
    description: 'Ofrecemos servicios integrales de construcción y montaje para el sector industrial, garantizando la correcta ejecución de obras civiles, instalaciones eléctricas y montajes electromecánicos con los más altos estándares de calidad y seguridad.',
    benefits: [
      'Ejecución integral de proyectos desde la obra civil hasta el montaje final.',
      'Cumplimiento estricto de normativas de seguridad y calidad.',
      'Optimización de tiempos y recursos en la instalación.'
    ],
    impact: 'Reducción de tiempos de inactividad durante la construcción y montaje, asegurando que las instalaciones estén operativas de manera rápida y segura.',
    useCases: [
      'Construcción de nuevas naves industriales.',
      'Ampliación de instalaciones existentes.',
      'Montaje de estructuras metálicas y equipos pesados.'
    ],
    images: [
      'https://sensible-spoonbill-485.convex.cloud/api/storage/f134213f-659f-4f43-9d22-abecf3fc5c7e',
      albanileriaImg
    ]
  },
  {
    id: 'fabricacion-y-soldadura',
    title: 'Fabricación y Soldadura',
    icon: Settings2,
    color: 'bg-orange-100 text-orange-700',
    items: [
      'Fabricación de estructuras metálicas.',
      'Soldadura e Instalación de tuberías AC / AI.'
    ],
    description: 'Proveemos soluciones especializadas en fabricación de estructuras metálicas y servicios de soldadura de alta precisión. Nuestro personal calificado asegura la integridad y durabilidad de cada instalación.',
    benefits: [
      'Estructuras metálicas fabricadas a medida de las necesidades del proyecto.',
      'Soldadura certificada para garantizar la seguridad de las instalaciones.',
      'Alta durabilidad y resistencia en tuberías de acero al carbón e inoxidable.'
    ],
    impact: 'Garantiza la integridad estructural y operativa de las plantas, minimizando riesgos de fallas por desgaste o mala calidad de materiales.',
    useCases: [
      'Instalación de tuberías de proceso en plantas químicas.',
      'Fabricación de plataformas y soportes estructurales.',
      'Sistemas de conducción de fluidos industriales.'
    ],
    images: [
      tuberiaImg,
      fabricacionSoldaduraImg
    ]
  },
  {
    id: 'mantenimiento-industrial',
    title: 'Mantenimiento Industrial',
    icon: Wrench,
    color: 'bg-emerald-100 text-emerald-700',
    items: [
      'Mantenimiento mecánico y eléctrico (preventivo y correctivo).',
      'Mantenimiento integral de techos.'
    ],
    description: 'Servicio integral de mantenimiento preventivo y correctivo para equipos, sistemas mecánicos y eléctricos. Nos enfocamos en mantener la operatividad y extender la vida útil de sus activos industriales.',
    benefits: [
      'Prevención de fallas inesperadas y reducción de paros no programados.',
      'Extensión de la vida útil de los equipos e instalaciones.',
      'Mejora en la seguridad operativa y del personal.'
    ],
    impact: 'Aumento significativo en la disponibilidad de los equipos y reducción de costos operativos a largo plazo.',
    useCases: [
      'Mantenimiento de motores eléctricos, bombas centrífugas y arrancadores.',
      'Impermeabilización y mantenimiento de techos industriales.',
      'Mantenimiento correctivo de tableros de distribución.'
    ],
    images: [
      mantenimientoImg,
      mantenimientoIndustrialImg
    ]
  },
  {
    id: 'servicios-complementarios',
    title: 'Servicios Complementarios',
    icon: Package,
    color: 'bg-purple-100 text-purple-700',
    items: [
      'Personal especializado por administración.',
      'Servicio de transporte / logística.',
      'Servicio de almacenaje.'
    ],
    description: 'Proveemos personal altamente capacitado y servicios logísticos que complementan las operaciones principales de su empresa. Nos adaptamos a sus requerimientos específicos para brindar soluciones flexibles.',
    benefits: [
      'Flexibilidad en la contratación de personal especializado.',
      'Optimización de la cadena de suministro con logística y almacenaje eficiente.',
      'Redución de la carga administrativa para el cliente.'
    ],
    impact: 'Permite a las empresas enfocarse en su core business mientras nosotros gestionamos el personal técnico y la logística operativa.',
    useCases: [
      'Suministro de mecánicos, eléctricos y soldadores para paros de planta.',
      'Transporte de materiales y equipos pesados.',
      'Almacenamiento temporal de componentes industriales.'
    ],
    images: [
      servicios1Img,
      servicios2Img
    ]
  }
];
