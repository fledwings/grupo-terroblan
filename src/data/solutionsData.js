import { Building2, Settings2, Wrench, Package, Cpu, Sliders, Activity, Zap } from 'lucide-react';

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
      'https://sensible-spoonbill-485.convex.cloud/api/storage/ccf577fe-3e88-4fd3-a78b-772ada1e864b',
      'https://sensible-spoonbill-485.convex.cloud/api/storage/097536cb-4e6d-492e-8c09-84fd8e05c581'
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
      'https://sensible-spoonbill-485.convex.cloud/api/storage/cd30da51-f1a3-4d94-86d7-94fb0323e8a2',
      'https://sensible-spoonbill-485.convex.cloud/api/storage/6df0cb42-d19e-4e0c-bff1-b074c20815fa'
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
      'https://sensible-spoonbill-485.convex.cloud/api/storage/0ea068f9-a2b0-47dc-a15e-f21a10b4aa74',
      'https://sensible-spoonbill-485.convex.cloud/api/storage/4493f943-8b22-4e10-9cae-e78cca45bd72'
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
      'https://sensible-spoonbill-485.convex.cloud/api/storage/21d5bbd2-8501-4506-8f68-15f28ebcb9fe',
      'https://sensible-spoonbill-485.convex.cloud/api/storage/b21853f5-7045-4169-9c3f-845ea1632db6'
    ]
  },
  {
    id: 'automatizacion-industrial',
    title: 'Automatización Industrial',
    icon: Cpu,
    color: 'bg-indigo-100 text-indigo-700',
    items: [
      'Integración de sistemas de control.',
      'Automatización de líneas de producción.',
      'Sistemas SCADA y PLCs.'
    ],
    description: 'Implementamos tecnologías avanzadas para automatizar procesos industriales, integrando sistemas de control (PLCs, SCADA) que optimizan la producción, reducen errores y mejoran la eficiencia operativa.',
    benefits: [
      'Incremento en la velocidad y volumen de producción.',
      'Reducción de errores humanos y desperdicios.',
      'Monitoreo en tiempo real de los procesos.'
    ],
    impact: 'Modernización de la planta productiva, logrando mayor competitividad, eficiencia y reducción de costos operativos.',
    useCases: [
      'Automatización de líneas de ensamblaje.',
      'Integración de robots colaborativos.',
      'Actualización tecnológica de tableros de control.'
    ],
    images: [
      'https://sensible-spoonbill-485.convex.cloud/api/storage/d1c23d82-c562-4f6a-8c37-198c6eb7382f',
      'https://sensible-spoonbill-485.convex.cloud/api/storage/097536cb-4e6d-492e-8c09-84fd8e05c581'
    ]
  },
  {
    id: 'sistemas-de-control',
    title: 'Sistemas de Control',
    icon: Sliders,
    color: 'bg-cyan-100 text-cyan-700',
    items: [
      'Diseño de tableros de control.',
      'Controladores lógicos programables (PLC).',
      'Interfaces Hombre-Máquina (HMI).'
    ],
    description: 'Diseñamos e implementamos sistemas de control a medida para garantizar que sus máquinas y procesos operen bajo los parámetros correctos, brindando interfaces intuitivas para los operadores.',
    benefits: [
      'Mayor precisión en el control de variables de proceso.',
      'Facilidad de operación a través de interfaces amigables (HMI).',
      'Escalabilidad para futuras expansiones.'
    ],
    impact: 'Garantiza la estabilidad de los procesos, mejorando la calidad del producto final y facilitando la toma de decisiones operativas.',
    useCases: [
      'Implementación de tableros de distribución y CCMs.',
      'Desarrollo de lógicas de control para nuevos procesos.',
      'Migración de sistemas de control obsoletos.'
    ],
    images: [
      'https://sensible-spoonbill-485.convex.cloud/api/storage/f91f7840-11c3-4d21-b664-012944777a02',
      'https://sensible-spoonbill-485.convex.cloud/api/storage/4493f943-8b22-4e10-9cae-e78cca45bd72'
    ]
  },
  {
    id: 'mantenimiento-predictivo',
    title: 'Mantenimiento Predictivo',
    icon: Activity,
    color: 'bg-rose-100 text-rose-700',
    items: [
      'Análisis de vibraciones.',
      'Termografía infrarroja.',
      'Monitoreo de condición de equipos.'
    ],
    description: 'Utilizamos técnicas de diagnóstico avanzado para anticipar fallas en los equipos antes de que ocurran. Esto permite programar intervenciones solo cuando es necesario, optimizando recursos.',
    benefits: [
      'Detección temprana de anomalías y desgaste.',
      'Reducción drástica de fallas catastróficas y tiempos muertos.',
      'Optimización del inventario de repuestos.'
    ],
    impact: 'Maximiza el retorno de inversión en maquinaria, asegurando su disponibilidad operativa y evitando altos costos por paros no planificados.',
    useCases: [
      'Monitoreo continuo de motores y bombas críticas.',
      'Inspecciones termográficas en tableros eléctricos.',
      'Análisis de aceite en equipos hidráulicos.'
    ],
    images: [
      'https://sensible-spoonbill-485.convex.cloud/api/storage/2eb88951-1f63-46ca-a42e-5aff0c27df97',
      'https://sensible-spoonbill-485.convex.cloud/api/storage/bdeccb22-3814-43de-8b2d-b875371aac46'
    ]
  },
  {
    id: 'optimizacion-de-procesos',
    title: 'Optimización de Procesos',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-700',
    items: [
      'Auditorías energéticas.',
      'Mejora continua y Lean Manufacturing.',
      'Reingeniería de procesos.'
    ],
    description: 'Analizamos sus operaciones actuales para identificar cuellos de botella, ineficiencias y oportunidades de mejora, diseñando estrategias para maximizar el rendimiento y reducir el consumo de recursos.',
    benefits: [
      'Reducción significativa en los costos de producción y energía.',
      'Mejora en la calidad y consistencia del producto.',
      'Procesos más sostenibles y amigables con el medio ambiente.'
    ],
    impact: 'Transforma la operación hacia la excelencia operativa, logrando hacer más con menos recursos y aumentando la rentabilidad.',
    useCases: [
      'Reducción de mermas en líneas de empaque.',
      'Optimización del consumo eléctrico en plantas industriales.',
      'Rediseño de flujos de trabajo para mayor eficiencia.'
    ],
    images: [
      'https://sensible-spoonbill-485.convex.cloud/api/storage/95cec54f-d968-4c0b-896d-ea700f7525ce',
      'https://sensible-spoonbill-485.convex.cloud/api/storage/ccf577fe-3e88-4fd3-a78b-772ada1e864b'
    ]
  }
];
