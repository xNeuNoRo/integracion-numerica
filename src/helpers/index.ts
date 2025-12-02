export function validateTrapezoidalMethod(a: number, b: number, n: number, fnPython: string) {
  // a, b, n deben ser números válidos
  if (isNaN(a) || isNaN(b) || isNaN(n)) return false;

  // La función no debe estar vacía
  if (typeof fnPython !== "string" || fnPython.trim() === "") return false;

  // a y b deben ser números finitos
  if (!Number.isFinite(a) || !Number.isFinite(b)) return false;

  // n debe ser entero positivo
  if (!Number.isInteger(n) || n <= 0) return false;

  // La función debe contener solo caracteres válidos (números, letras, operadores y paréntesis)
  const regexp = /^[0-9a-zA-Z_+\-*/^().\s]+$/;

  // Limpiar espacios en blanco para la validación
  const cleaned = fnPython.replace(/\s+/g, "");

  if (!regexp.test(cleaned)) return false;

  const allowedFunctions = [
    "np", "sin", "cos", "tan",
    "asin", "acos", "atan",
    "arcsin", "arccos", "arctan",
    "sinh", "cosh", "tanh",
    "log", "log10", "log2", "ln",
    "sqrt", "abs", "exp",
    "floor", "ceil", "round", "sign",
    "pi", "e"
  ];

  // Extraer tokens de la función
  const tokens = cleaned.match(/[a-zA-Z_]+/g) || [];

  for (const token of tokens) {
    // Permitir variable "x"
    if (token === "x") continue;

    // Permitir prefijo de numpy "np"
    if (token === "np") continue;

    // Permitir funciones y constantes conocidas
    if (allowedFunctions.includes(token)) continue;

    // Permitir combinaciones tipo np.abs → token "npabs" no debe pasar
    // pero ya lo evitamos porque convertimos "np.abs" en "np", "abs"
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

export function convertMathFnToPython(fn: string) {
  return fn
    // -----------------------------
    // POTENCIAS
    // -----------------------------
    .replace(/\^/g, "**") // potencia

    // -----------------------------
    // LOGARITMOS
    // -----------------------------
    .replace(/\blog10/g, "np.log10")
    .replace(/\blog2/g, "np.log2")
    .replace(/\bln/g, "np.log") // ln → log natural
    .replace(/\blog/g, "np.log") // log → log natural

    // -----------------------------
    // FUNCIONES LARGAS
    // -----------------------------
    .replace(/asin/g, "np.arcsin")
    .replace(/acos/g, "np.arccos")
    .replace(/atan/g, "np.arctan")
    .replace(/sinh/g, "np.sinh")
    .replace(/cosh/g, "np.cosh")
    .replace(/tanh/g, "np.tanh")

    // -----------------------------
    // FUNCIONES CORTAS
    // -----------------------------
    .replace(/sqrt/g, "np.sqrt") // raíz
    .replace(/sin/g, "np.sin")
    .replace(/cos/g, "np.cos")
    .replace(/tan/g, "np.tan")
    .replace(/\babs/g, "np.abs") // valor absoluto

    // -----------------------------
    // CONSTANTES
    // -----------------------------
    .replace(/\bpi\b/g, "np.pi") // constante π
    .replace(/\be\b/g, "np.e") // constante e

    // -----------------------------
    // OTRAS FUNCIONES
    // -----------------------------
    .replace(/\bexp/g, "np.exp")
    .replace(/\bfloor/g, "np.floor")
    .replace(/\bceil/g, "np.ceil")
    .replace(/\bround/g, "np.round")
    .replace(/\bsign/g, "np.sign");
}
