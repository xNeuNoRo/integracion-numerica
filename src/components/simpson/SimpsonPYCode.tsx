import { useEffect } from "react";
import CopyBtn from "../CopyBtn";
import PyRunner from "../PyRunner";
import Prism from "prismjs";
import { convertMathFnToPython, validateSimpsonMethod } from "../../helpers";

type SimpsonPYCodeProps = {
  a: number;
  b: number;
  n: number;
  fn: string;
  invalidFn: boolean;
};

export default function SimpsonPYCode({
  a,
  b,
  n,
  fn,
  invalidFn,
}: SimpsonPYCodeProps) {
  // Convertir la función a una sintaxis válida en Python
  const fnPython = convertMathFnToPython(fn);

  const pyCode = `
# Regla de Simpson en Python
  
# Importar libreria numpy para funciones matemáticas
import numpy as np
  
# Función para evaluar la función de integración
def f(x):
    return ${fnPython} # función de integración
    
# Parámetros
a = ${a} # límite inferior
b = ${b} # límite superior
n = ${n} # n (subdivisiones, debe ser par)
h = (b - a) / n # ancho de cada subintervalo

# Cálculo del área usando la Regla de Simpson
area = 0
  
# Iterar sobre cada punto
for i in range(0, n+1):
    # Calcular x_i (x0, x1, ..., xn)
    x = a + i*h

    # Coeficiente según la posición
    # Al principio o final es 1
    if i == 0 or i == n:
        coef = 1
    # Si es par (y no es extremo) es 2
    elif i % 2 == 0:
        coef = 2
    # Si es impar (el unico caso restante, por eso else) es 4
    else:
        coef = 4

    # Sumar al área total, el coeficiente por f(x_i)
    area += coef * f(x)

# Multiplicar por h/3 al final
area *= h/3
  
# Imprimir resultado
print("Área aproximada =", area)
`;

  useEffect(() => {
    Prism.highlightAll(); // Resaltar el código con PrismJS
  }, [pyCode]);

  const readyToRun = !invalidFn && validateSimpsonMethod(a, b, n, fn);

  return (
    <>
      <div className="relative">
        <pre id="simpson-code" className="rounded-xl">
          <CopyBtn targetId="simpson-code" />
          <code className="language-python">{pyCode}</code>
        </pre>
      </div>

      <PyRunner code={pyCode} readyToRun={readyToRun} />
    </>
  );
}
