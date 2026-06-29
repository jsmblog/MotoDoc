interface Service {
  icon: string
  title: string
  description: string
  tags: string[]
}

export const services: Service[] = [
  {
    icon: '🔧',
    title: 'Mantenimiento preventivo',
    description: 'Cambio de aceite, engrasado, filtros, bujías y revisión completa del sistema. Tu moto siempre a punto.',
    tags: ['Honda', 'Yamaha', 'Suzuki', 'Sukida'],
  },
  {
    icon: '⚙️',
    title: 'Reparación de motor',
    description: 'Diagnóstico y reparación de fallas en motor, carburación, transmisión y sistema de escape.',
    tags: ['Garantía incluida'],
  },
  {
    icon: '⚡',
    title: 'Sistema eléctrico',
    description: 'Revisión de batería, alternador, luces, arranque y cableado.',
    tags: ['Diagnóstico', 'Garantía incluida'],
  },
  {
    icon: '🛞',
    title: 'Frenos y suspensión',
    description: 'Cambio de pastillas,Cambios de llantas , Cambios de tubos, kit de arrastre , discos, líquido de frenos y revisión de amortiguadores. Tu seguridad primero.',
    tags: ['Seguridad', 'Garantía incluida'],
  },
  {
    icon: '🔍',
    title: 'Diagnóstico a domicilio',
    description: 'Llevo mis herramientas hasta tu casa o donde estes. Te digo qué tiene tu moto y cuánto cuesta arreglarlo.',
    tags: ['Sin cita previa', 'Rápido', 'Garantía incluida'],
  },
  {
    icon: '🚿',
    title: 'Lavado de motos',
    description: 'Lavado completo a domicilio, limpieza de motor, cadena y acabados. Tu moto queda como nueva sin moverla del parqueadero.',
    tags: ['A domicilio', 'Motor y carrocería'],
  },
]