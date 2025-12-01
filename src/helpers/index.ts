export function validateTrapezoidalMethod(a: number, b: number, n: number, fnPython: string) {
  // a, b, n deben ser números válidos
  if (isNaN(a) || isNaN(b) || isNaN(n)) return false;

  // La función no debe estar vacía
  if (typeof fnPython !== "string" || fnPython.trim() === "") return false;

  // a y b deben ser números finitos
  if (!Number.isFinite(a) || !Number.isFinite(b)) return false;

  // n debe ser entero positivo
  if (!Number.isInteger(n) || n <= 0) return false;

  // La función debe ser algo como "np.sin(x)" o "x**2" → validar sintaxis básica
  const expresionValida = /^[0-9x\+\-\*\/\^\(\)\.\snpabsincostaehqrt]+$/i;

  // Eliminar espacios para la validación
  if (!expresionValida.test(fnPython.replace(/\s+/g, ""))) {
    return false;
  }

  return true;
}

export function validateSimpsonMethod(a: number, b: number, n: number, fnPython: string) {
  // Reutiliza el validador del trapecio
  if (!validateTrapezoidalMethod(a, b, n, fnPython)) return false;

  // Condición adicional de Simpson
  if (n % 2 !== 0) return false;

  return true;
}
