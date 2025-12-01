import { BlockMath, InlineMath } from "react-katex";

export default function SimpsonIntro() {
  return (
    <section className="mb-8 space-y-4">
      <h1 className="text-purple-500 font-black text-4xl">Regla de Simpson</h1>

      <p className="text-gray-700">
        La Regla de Simpson es un método de integración numérica más preciso que
        la Regla del Trapecio. En lugar de aproximar la curva con segmentos de
        recta, Simpson utiliza <span className="font-semibold">parábolas</span>{" "}
        que pasan por tres puntos consecutivos de la función. Cada parábola se
        ajusta a la forma de la curva entre dos subintervalos consecutivos.
      </p>

      <p className="text-gray-700">
        Para aplicar Simpson, el intervalo <InlineMath math="[a,b]" /> se divide
        en un número <span className="font-semibold">par</span> de subintervalos{" "}
        <InlineMath math="n" />, con ancho <InlineMath math="h=\frac{b-a}{n}" />
        . Tomamos los puntos <InlineMath math="x_0, x_1, \ldots, x_n" /> y
        formamos grupos de tres puntos: <InlineMath math="(x_0, x_1, x_2)" />,{" "}
        <InlineMath math="(x_2, x_3, x_4)" />, etc. Cada grupo define una
        parábola cuya área se calcula exactamente y luego se suman todas esas
        áreas.
      </p>

      {/* Caja morada con fórmula */}
      <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-sm text-gray-800 space-y-4">
        <p className="font-semibold">Fórmula general de Simpson</p>

        <p>
          Sea{" "}
          <span className="font-mono font-black bg-purple-300/80 px-2 py-1 rounded-xl text-purple-700 text-lg whitespace-nowrap overflow-x-auto">
            <InlineMath math="h = \frac{b-a}{n}" />
          </span>{" "}
          con <InlineMath math="n" /> par y{" "}
          <span className="font-mono font-black bg-purple-300/80 px-2 py-1 rounded-xl text-purple-700 text-lg whitespace-nowrap overflow-x-auto">
            <InlineMath math="x_0 = a,\; x_1,\,\ldots,\, x_n = b" />
          </span>
          , entonces:
        </p>

        <div className="font-black text-center text-lg bg-purple-200/80 p-3 rounded-xl text-purple-700 overflow-x-auto">
          <div className="inline-block min-w-max">
            <BlockMath
              math={`
              \\int_a^b f(x)\\,dx \\approx \\frac{h}{3}\\left[
                f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\cdots + f(x_n)
              \\right]
            `}
            />
          </div>
        </div>

        <p>
          Aquí aparece un patrón muy característico en los coeficientes: los
          extremos tienen peso <InlineMath math="1" />, los puntos impares peso{" "}
          <InlineMath math="4" /> y los puntos pares internos peso{" "}
          <InlineMath math="2" />.
        </p>

        <p>
          Por ejemplo, con <InlineMath math="n = 4" /> (cinco puntos) la
          combinación queda así:
        </p>

        <div className="text-center bg-purple-200/80 px-2 py-1 rounded-xl text-purple-700 text-lg font-black overflow-x-auto">
          <div className="inline-block min-w-max">
            <BlockMath
              math={`
              1\\cdot f(x_0) + 4\\cdot f(x_1) + 2\\cdot f(x_2) + 4\\cdot f(x_3) + 1\\cdot f(x_4)
            `}
            />
            <p className="font-mono font-semibold mt-1">
              ⟶ &nbsp; 1 &nbsp; 4 &nbsp; 2 &nbsp; 4 &nbsp; 1
            </p>
          </div>
        </div>

        <p>
          Si continuamos aumentando <InlineMath math="n" />, el patrón se repite
          como la secuencia{" "}
          <InlineMath math="1,\,4,\,2,\,4,\,2,\,4,\,\ldots,\,1" />, muchas veces
          recordada de forma abreviada como un juego de 4–2–4–2–4 sobre los
          puntos internos.
        </p>
      </div>

      {/* IMAGEN 1 */}
      <figure className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <img
          src="/ejemplos/simpson_e1.jpg"
          alt="Regla de Simpson: una parábola aproximando la curva entre x0, x1 y x2."
          className="w-full max-w-xl mx-auto"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          Imagen 1. Cada par de subintervalos [x₀, x₂] se aproxima con una
          parábola que pasa por los puntos (x₀, f(x₀)), (x₁, f(x₁)) y (x₂,
          f(x₂)).
        </figcaption>
      </figure>

      {/* IMAGEN 2 */}
      <figure className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <img
          src="/ejemplos/simpson_e2.png"
          alt="Varias parábolas consecutivas aproximando toda el área bajo la curva."
          className="w-full max-w-xl mx-auto"
        />
        <figcaption className="mt-2 text-xs text-gray-500 text-center">
          Imagen 2. El intervalo [a, b] se divide en un número par de
          subintervalos. Cada par genera una parábola y la suma de sus áreas
          aproxima la integral completa.
        </figcaption>
      </figure>

      <p className="text-gray-700">
        En la calculadora de abajo puedes modificar la función, los límites y el
        número de subdivisiones (siempre par) para ver cómo cambia el valor del
        área aproximada.
      </p>
    </section>
  );
}
