export interface CalloutIcon {
  svg: string;
  color: [number, number, number];
}

export const CALLOUT_ICONS: Record<string, CalloutIcon> = {
  note: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 16 12 12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    color: [100, 150, 255],
  },
  info: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    color: [100, 150, 255],
  },
  tip: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 008.91 14"/></svg>',
    color: [0, 200, 100],
  },
  warning: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    color: [255, 180, 0],
  },
  danger: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    color: [255, 60, 60],
  },
  success: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    color: [0, 200, 80],
  },
  failure: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    color: [220, 60, 60],
  },
  bug: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M4 8h16"/><path d="M20 12h2"/><path d="M2 12h2"/><path d="M7 12a5 5 0 0110 0v4a5 5 0 01-10 0v-4z"/><line x1="12" y1="16" x2="12" y2="20"/></svg>',
    color: [200, 100, 150],
  },
  question: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    color: [150, 100, 200],
  },
  abstract: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    color: [0, 200, 200],
  },
  quote: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>',
    color: [150, 150, 150],
  },
  example: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 008.91 14"/></svg>',
    color: [251, 255, 0],
  },
  prueba: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16"/><path d="M12 8v12"/><path d="M18 8V5a2 2 0 00-2-2H8a2 2 0 00-2 2v3"/><path d="M6 21h12"/></svg>',
    color: [0, 255, 8],
  },
  boton: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="10 8 14 12 10 16"/></svg>',
    color: [188, 170, 108],
  },
  enlace: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M6 12h12"/></svg>',
    color: [0, 214, 161],
  },
  imagen: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    color: [35, 97, 128],
  },
  grafico: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 118 2.83"/><path d="M22 12A10 10 0 0012 2v10z"/></svg>',
    color: [35, 97, 128],
  },
  papel: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-4 0v-9"/><polyline points="16 2 16 8 22 8"/></svg>',
    color: [0, 255, 213],
  },
  trigo: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M12 2v20"/><path d="M12 2c-2 0-6 4-6 8 0 2.5 2 5 6 5"/><path d="M12 2c2 0 6 4 6 8 0 2.5-2 5-6 5"/></svg>',
    color: [255, 238, 0],
  },
  leche: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8"/><path d="M9 2v2.789a4 4 0 01-.672 2.219l-3.01 4.405A5 5 0 005 14v6a2 2 0 002 2h10a2 2 0 002-2v-6c0-1.133-.174-2.2-.497-3.213"/><path d="M7 15h10"/><path d="M7 18h5"/></svg>',
    color: [255, 255, 255],
  },
  pez: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 12C18 8.686 15.314 6 12 6C8.686 6 6 8.686 6 12"/><path d="M6 12C6 15.314 8.686 18 12 18C15.314 18 18 15.314 18 12"/><path d="M18 12h4"/><path d="M4 12h4"/><path d="M12 6V2"/><path d="M12 22v-4"/></svg>',
    color: [0, 145, 255],
  },
  manzana: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20c-3 0-6-2-6-6s2-6 6-6 6 2 6 6-3 6-6 6z"/><path d="M12 8V4"/><path d="M8 4h8"/><path d="M9 17l3-3 3 3"/></svg>',
    color: [203, 37, 37],
  },
  lapiz: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/><line x1="15" y1="5" x2="19" y2="9"/></svg>',
    color: [148, 155, 255],
  },
  pisadas: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/><path d="M8 12c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/><path d="M14 14c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/><path d="M18 10c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/></svg>',
    color: [102, 255, 71],
  },
  cerebro: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4a4 4 0 014 4c0 1.5-.4 2.7-1 3.5 1 .5 2 1.5 2 3.5 0 2-2 4-5 4s-5-2-5-4c0-2 1-3 2-3.5-.6-.8-1-2-1-3.5a4 4 0 014-4z"/><path d="M12 2v2"/><path d="M12 20v2"/></svg>',
    color: [255, 168, 232],
  },
  mano: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0"/><path d="M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2"/><path d="M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8"/><path d="M18 8a2 2 0 114 0v6a8 8 0 01-8 8h-2c-2.21 0-4.21-.9-5.66-2.34L2.2 15.8a2 2 0 012.83-2.83L8 16"/></svg>',
    color: [185, 112, 245],
  },
  palabra: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><text x="7" y="16" font-size="10" fill="currentColor">Aa</text></svg>',
    color: [185, 148, 106],
  },
  tierra: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>',
    color: [85, 208, 83],
  },
  termometro: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/><circle cx="11.5" cy="17.5" r="3.5"/></svg>',
    color: [251, 70, 76],
  },
  nube: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9z"/></svg>',
    color: [217, 217, 217],
  },
  escudo: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    color: [192, 20, 255],
  },
  pelicula: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></svg>',
    color: [68, 207, 110],
  },
  'post-it': {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V8.5L15.5 3z"/><polyline points="15 3 15 9 21 9"/></svg>',
    color: [240, 216, 61],
  },
  sigma: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><text x="8" y="17" font-size="14" font-weight="bold" fill="currentColor">S</text></svg>',
    color: [2, 242, 226],
  },
  mas: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
    color: [129, 156, 193],
  },
  extra: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',
    color: [255, 251, 148],
  },
  eclipse: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="3" y2="12"/></svg>',
    color: [232, 255, 117],
  },
  movimiento: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',
    color: [123, 210, 116],
  },
  tambor: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"/></svg>',
    color: [178, 188, 108],
  },
  infinito: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 100 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 000-8c-2 0-4 1.33-6 4z"/></svg>',
    color: [139, 142, 249],
  },
  gente: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    color: [76, 175, 80],
  },
  statblocks: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    color: [180, 180, 180],
  },
  corazon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
    color: [188, 108, 108],
  },

  planta: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    color: [125, 188, 108],
  },
  celula: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="12"/><line x1="12" y1="12" x2="22" y2="12"/></svg>',
    color: [153, 223, 83],
  },
  hueso: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 100-5 .5.5 0 01-.5-.5 2.5 2.5 0 10-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 000 5c.28 0 .5.22.5.5a2.5 2.5 0 105 0c0-.81-.7-1.8 0-2.5l7-7z"/></svg>',
    color: [255, 252, 158],
  },
  jarron: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M4 18c0 2.2 3.58 4 8 4s8-1.8 8-4"/><path d="M6 18v-7h12v7"/><path d="M4 11c0-1.66 3.58-3 8-3s8 1.34 8 3"/><path d="M12 8V6"/></svg>',
    color: [188, 108, 108],
  },
  martillo: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9"/><path d="M18 6l-3 3"/><path d="M22 2l-4.5 4.5"/><path d="M15 12L22 5"/></svg>',
    color: [238, 109, 253],
  },
  arriba: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M12 2l-6 6"/><path d="M12 2l6 6"/></svg>',
    color: [57, 254, 96],
  },
  abajo: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V2"/><path d="M12 22l-6-6"/><path d="M12 22l6-6"/></svg>',
    color: [245, 71, 71],
  },
  filete: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 6L9 21l-4-4L20 2"/><path d="M5 17l-2 5 5-2"/><path d="M18 5l-3 3"/></svg>',
    color: [188, 108, 112],
  },
  adn: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17"/><path d="M12 22a7 7 0 007-7c0-2.38-1.19-4.47-3-5.74V7"/><path d="M9 9h6"/><path d="M9 15h6"/><path d="M9 12h6"/></svg>',
    color: [108, 188, 135],
  },
  libro: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><path d="M10 8l4 4-4 4"/></svg>',
    color: [230, 191, 0],
  },
  'article-content': {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    color: [61, 255, 252],
  },
  ejemplo: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 008.91 14"/></svg>',
    color: [251, 255, 0],
  },
  reloj: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    color: [140, 141, 141],
  },
  pergamino: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4"/><path d="M16 3h-3"/><path d="M8 21V3"/><rect x="8" y="3" width="10" height="12" rx="1"/><text x="10" y="12" font-size="6" fill="currentColor">Lorem ipsum</text></svg>',
    color: [255, 212, 153],
  },
  cyborg: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"/><path d="M20 21a8 8 0 10-16 0"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="9" x2="12" y2="4"/><path d="M10 12l-3 3"/><path d="M14 12l3 3"/></svg>',
    color: [19, 75, 134],
  },
  estrella: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    color: [251, 255, 0],
  },
  papelera: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
    color: [107, 114, 128],
  },
  hablar: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="12" y2="13"/></svg>',
    color: [58, 187, 120],
  },
  espadas: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="11" x2="15" y2="13"/><polyline points="16.5 14.5 21 19 19 21 14.5 16.5"/><line x1="13" y1="11" x2="15" y2="13"/><polyline points="9.5 6.5 5 2 3 4 7.5 8.5"/><line x1="11" y1="13" x2="13" y2="11"/></svg>',
    color: [87, 92, 96],
  },
  rehacer: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>',
    color: [42, 198, 180],
  },
  espejo: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',
    color: [242, 244, 138],
  },
  dinero: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 15h2a2 2 0 100-4h-2V9h4"/><path d="M13 17v-2"/><path d="M13 7v2"/><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
    color: [247, 212, 100],
  },
  balanza: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M4 6h16"/><path d="M6 6l-2 5h4L6 6z"/><path d="M18 6l-2 5h4L18 6z"/></svg>',
    color: [236, 224, 85],
  },
  paleta: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-10-10-10z"/></svg>',
    color: [124, 58, 237],
  },
  piramide: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2z"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',
    color: [220, 190, 80],
  },
  sol: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    color: [225, 221, 86],
  },
  montana: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22l7-10 5 6 4-5 4 9H2z"/><path d="M16 2l-3 4 2 2"/></svg>',
    color: [69, 123, 157],
  },
  calavera: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="10" r="1.5" fill="currentColor"/><circle cx="15" cy="10" r="1.5" fill="currentColor"/><path d="M12 2a8 8 0 00-8 8c0 2.5 1.2 4.7 3 6v3h10v-3c1.8-1.3 3-3.5 3-6a8 8 0 00-8-8z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="10" y2="18"/><line x1="14" y1="21" x2="14" y2="18"/></svg>',
    color: [255, 255, 255],
  },
  almohadilla: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
    color: [37, 99, 235],
  },
  triangulo: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 22 2 22 12 2"/></svg>',
    color: [90, 127, 11],
  },
  ojo: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    color: [255, 255, 255],
  },
};

export function getCalloutIcon(type: string): CalloutIcon {
  const icon = CALLOUT_ICONS[type.toLowerCase()];
  if (icon) return icon;
  return {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><text x="8" y="16" font-size="10" fill="currentColor">?</text></svg>',
    color: [150, 150, 150],
  };
}
