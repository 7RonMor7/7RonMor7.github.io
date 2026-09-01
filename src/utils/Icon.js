// Un ícono importado (SVG local o URL) siempre viene como string con "/" o
// que empieza con "data:" — un emoji nunca tiene esos caracteres, así que
// esto basta para distinguir uno de otro sin tener que tocar cada dato.
export function isImageIcon(icon) {
  return typeof icon === 'string' && (icon.startsWith('data:') || icon.includes('/'));
}