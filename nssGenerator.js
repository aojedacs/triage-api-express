function generarNumeroSeguridadSocial(seed) {
  // Convertir la semilla a un número entero inicial
  let x = hashString(seed);

  // Función de hash para convertir un string en un número
  function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convierte a un entero de 32 bits
    }
    return hash;
  }

  // Generador de números pseudoaleatorios (LCG)
  function generarPseudoAleatorio() {
    x = (1664525 * x + 1013904223) % 2 ** 32;
    return x / 2 ** 32; // Normalizar a un valor entre 0 y 1
  }

  // Generar el número de seguridad social de 10 dígitos
  let numeroSeguridadSocial = "";
  for (let i = 0; i < 10; i++) {
    const digito = Math.floor(generarPseudoAleatorio() * 10);
    numeroSeguridadSocial += digito;
  }

  return numeroSeguridadSocial.replace(/-/g, "");
}

module.exports = generarNumeroSeguridadSocial;
