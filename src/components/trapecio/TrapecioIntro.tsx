import { BlockMath, InlineMath } from "react-katex";

export default function TrapecioIntro() {
  return (
    <section className="mb-8 space-y-4">
      <h1 className="text-blue-500 font-black text-4xl">
        Regla del Trapecio
      </h1>

      <p className="text-gray-700">
        La Regla del Trapecio es un método de integración numérica que aproxima
        el área bajo la curva de{" "}
        <InlineMath math="f(x)" /> reemplazándola por una sucesión de{" "}
        <span className="font-semibold">trapecios rectilíneos</span>.  
        En lugar de calcular exactamente{" "}
        <InlineMath math="\displaystyle \int_a^b f(x)\,dx" />, dividimos el intervalo{" "}
        <InlineMath math="[a,b]" /> en <InlineMath math="n" /> subintervalos
        y unimos los puntos de la función mediante segmentos de recta.
      </p>

      <p className="text-gray-700">
        Cada subintervalo genera un trapecio cuya área se suma para aproximar
        el área total.  
        A medida que aumenta <InlineMath math="n" />, los trapecios se ajustan
        mejor a la forma real de la curva y la aproximación mejora.
      </p>

      {/* Caja azul con fórmula */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-800 space-y-4">
        <p className="font-semibold text-blue-700">Fórmula general de la Regla del Trapecio</p>

        <p>
          Sea{" "}
          <span className="font-mono font-black bg-blue-200/70 px-2 py-1 rounded-xl text-blue-700 text-lg">
            <InlineMath math="h = \frac{b - a}{n}" />
          </span>{" "}
          y{" "}
          <span className="font-mono font-black bg-blue-200/70 px-2 py-1 rounded-xl text-blue-700 text-lg">
            <InlineMath math="x_0 = a,\; x_1,\ldots,x_n = b" />
          </span>
          , entonces:
        </p>

        <div className="font-black text-center text-lg bg-blue-200/70 p-3 rounded-xl text-blue-700">
          <BlockMath
            math={`
              \\int_a^b f(x)\,dx \\approx 
              \\frac{h}{2}\\left[
                f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)
              \\right]
            `}
          />
        </div>

        <p>
          Observa el patrón de coeficientes aplicado a los valores de la
          función: los extremos se toman una sola vez, mientras que los puntos
          internos se multiplican por 2. El patrón es:
        </p>

        <div className="text-center bg-blue-200/70 px-2 py-1 rounded-xl text-blue-700 text-lg font-black">
          <BlockMath
            math={`
              1\\cdot f(x_0) + 2\\cdot f(x_1) + 2\\cdot f(x_2)
              + \\cdots + 2\\cdot f(x_{n-1}) + 1\\cdot f(x_n)
            `}
          />
          <p className="font-mono font-semibold mt-1">⟶ &nbsp; 1 &nbsp; 2 &nbsp; 2 &nbsp; … &nbsp; 2 &nbsp; 1</p>
        </div>
      </div>

      {/* IMAGEN 1 */}
      <figure className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <img
          src="/ejemplos/trapecio_e1.png"
          alt="Regla del Trapecio: un solo trapecio aproximando el área bajo la curva."
          className="w-full max-w-xl mx-auto"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          Imagen 1. Un trapecio aproximando el área bajo f(x) entre los puntos
          iniciales del intervalo.
        </figcaption>
      </figure>

      {/* IMAGEN 2 */}
      <figure className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <img
          src="/ejemplos/trapecio_e2.png"
          alt="Varios trapecios consecutivos aproximando el área bajo la curva."
          className="w-full max-w-xl mx-auto"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          Imagen 2. La división del intervalo en múltiples partes genera varios
          trapecios cuya suma aproxima la integral.
        </figcaption>
      </figure>

      <p className="text-gray-700">
        En la calculadora de abajo puedes ajustar la función, los límites y la
        cantidad de subdivisiones para observar cómo cambian los trapecios y la
        precisión de la aproximación.
      </p>
    </section>
  );
}
