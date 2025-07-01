export const calcularMedia = (datos: number[]) =>
  (datos.reduce((a, b) => a + b, 0) / datos.length).toFixed(2);

export const calcularMediana = (datos: number[]) => {
  const ordenados = [...datos].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);
  return (ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad]
  ).toFixed(2);
};

export const calcularModa = (datos: number[]) => {
  const frecuencia: Record<number, number> = {};
  datos.forEach(n => (frecuencia[n] = (frecuencia[n] || 0) + 1));
  const maxFrecuencia = Math.max(...Object.values(frecuencia));
  const modas = Object.keys(frecuencia)
    .filter(k => frecuencia[+k] === maxFrecuencia)
    .map(Number);
  return modas.length === datos.length ? 'Sin moda' : modas.join(', ');
};

export const calcularVarianzaMuestral = (datos: number[]) => {
  const media = datos.reduce((a, b) => a + b) / datos.length;
  const suma = datos.reduce((acc, val) => acc + (val - media) ** 2, 0);
  return (suma / (datos.length - 1)).toFixed(2);
};

export const calcularVarianzaPoblacional = (datos: number[]) => {
  const media = datos.reduce((a, b) => a + b) / datos.length;
  const suma = datos.reduce((acc, val) => acc + (val - media) ** 2, 0);
  return (suma / datos.length).toFixed(2);
};

export const calcularDesviacion = (datos: number[], esMuestral = true) =>
  Math.sqrt(
    esMuestral
      ? +calcularVarianzaMuestral(datos)
      : +calcularVarianzaPoblacional(datos)
  ).toFixed(2);

export const calcularRango = (datos: number[]) =>
  (Math.max(...datos) - Math.min(...datos)).toFixed(2);

export const calcularMinimo = (datos: number[]) => Math.min(...datos).toString();
export const calcularMaximo = (datos: number[]) => Math.max(...datos).toString();
