import { useEffect } from "react";
import CopyBtn from "../CopyBtn";
import PyRunner from "../PyRunner";
import Prism from "prismjs";
import { validateTrapezoidalMethod } from "../../helpers";

type TrapecioPYCodeProps = {
  a: number;
  b: number;
  n: number;
  fn: string;
};

export default function TrapecioPYCode({ a, b, n, fn }: TrapecioPYCodeProps) {
  // Conversión completa: JS → Python compatible con numpy
  const fnPython = fn
    .replace(/\^/g, "**") // potencia (x^2 → x**2)
    .replace(/sqrt/g, "np.sqrt") // raíz cuadrada
    .replace(/sin/g, "np.sin")
    .replace(/cos/g, "np.cos")
    .replace(/tan/g, "np.tan")
    .replace(/asin/g, "np.arcsin")
    .replace(/acos/g, "np.arccos")
    .replace(/atan/g, "np.arctan")
    .replace(/sinh/g, "np.sinh")
    .replace(/cosh/g, "np.cosh")
    .replace(/tanh/g, "np.tanh")
    .replace(/\bpi\b/g, "np.pi") // constantes
    .replace(/\be\b/g, "np.e")
    .replace(/\babs/g, "np.abs"); // valor absoluto

  const pyCode = `
# Regla del Trapecio en Python
  
# Importar librería numpy para funciones matemáticas
import numpy as np
  
# Función para evaluar la función de integración
def f(x):
    return ${fnPython} # función de integración
    
# Parámetros
a = ${a}  # límite inferior
b = ${b}  # límite superior
n = ${n}  # subdivisiones
h = (b - a) / n  # ancho de cada subintervalo
    
# Inicializar acumulador del área
area = 0
    
# Recorrer todos los puntos desde x0 hasta xn
for i in range(0, n+1):
    x = a + i*h  # calcular x_i
        
    # Coeficiente según la Regla del Trapecio:
    # extremos → 1
    # puntos internos → 2

    # Si es extremo
    if i == 0 or i == n:
        coef = 1
    # Si es un punto interno
    else:
        coef = 2
            
    area += coef * f(x)  # Sumar al área total, el coeficiente por f(x_i)
        
# Multiplicar al final por h/2
area *= h / 2
    
# Imprimir resultado
print("Área aproximada =", area)
    `;

  useEffect(() => {
    Prism.highlightAll(); // Resaltar el código con PrismJS
  }, [pyCode]);
  
  const readyToRun = validateTrapezoidalMethod(a, b, n, fn);

  return (
    <>
      <div className="relative">
        <pre id="trapecio-code" className="rounded-xl">
          <CopyBtn targetId="trapecio-code" />
          <code className="language-python">{pyCode}</code>
        </pre>
      </div>

      <PyRunner code={pyCode} readyToRun={readyToRun} />
    </>
  );
}
