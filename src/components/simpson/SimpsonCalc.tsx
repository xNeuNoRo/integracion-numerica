import { useState, useMemo } from "react";
import { create, all, type EvalFunction } from "mathjs";
import {
  VictoryChart,
  VictoryLine,
  VictoryArea,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";
import SimpsonPYCode from "./SimpsonPYCode";

const math = create(all);

export default function SimpsonCalc() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(Math.PI);
  const [n, setN] = useState<number>(4); // importante: debe ser PAR
  const [fn, setFn] = useState<string>("sin(x) + 2");

  // --- Compilar función del usuario de forma segura ---
  const compiled: EvalFunction | null = useMemo(() => {
    const trimmed = fn.trim();
    if (!trimmed) return null;

    try {
      return math.compile(trimmed);
    } catch {
      return null;
    }
  }, [fn]);

  const f = (x: number): number => {
    if (!compiled) return 0;
    try {
      const value = compiled.evaluate({ x });
      const num = Number(value);
      return Number.isFinite(num) ? num : 0;
    } catch {
      return 0;
    }
  };

  const noFunction = !compiled;
  const simpsonInvalido = n <= 0 || n % 2 !== 0;

  // --- Curva completa en [-10,10] para referencia tipo GeoGebra ---
  const curveFull = useMemo(() => {
    const arr: { x: number; y: number }[] = [];
    const Xmin = -10;
    const Xmax = 10;
    const steps = 300;
    const dx = (Xmax - Xmin) / steps;

    for (let i = 0; i <= steps; i++) {
      const x = Xmin + dx * i;
      arr.push({ x, y: f(x) });
    }
    return arr;
  }, [compiled, a, b, n]);

  // --- Curva solo en [a,b] ---
  const curveInterval = useMemo(() => {
    const arr: { x: number; y: number }[] = [];
    const steps = 200;
    const dx = (b - a) / steps;

    for (let i = 0; i <= steps; i++) {
      const x = a + dx * i;
      arr.push({ x, y: f(x) });
    }
    return arr;
  }, [a, b, compiled]);

  // --- ÁREAS POR SIMPSON (AGRUPADO DE 2 EN 2) ---
  const segmentos = useMemo(() => {
    if (noFunction || a === b || simpsonInvalido) return [];

    const arr: {
      points: { x: number; y: number }[];
      area: number;
    }[] = [];

    // Ancho de cada subintervalo
    const h = (b - a) / n;

    // Calcular áreas de Simpson de 2 en 2
    for (let i = 0; i < n; i += 2) {
      // Puntos x
      const x0 = a + h * i;
      const x1 = x0 + h;
      const x2 = x1 + h;

      // Evaluar f en esos puntos
      const y0 = f(x0);
      const y1 = f(x1);
      const y2 = f(x2);

      // Área del trapecio
      const area = (h / 3) * (y0 + 4 * y1 + y2);

      // Guardar puntos y área
      arr.push({
        points: [
          { x: x0, y: 0 },
          { x: x0, y: y0 },
          { x: x1, y: y1 },
          { x: x2, y: y2 },
          { x: x2, y: 0 },
        ],
        area,
      });
    }

    return arr;
  }, [a, b, n, compiled]);

  // --- Ajuste dinámico del eje Y ---
  const maxY = useMemo(() => {
    const allY = [
      ...curveInterval.map((p) => p.y),
      ...segmentos.flatMap((s) => s.points.map((p) => p.y)),
    ];
    const max = Math.max(...allY, 1);
    return max * 1.15;
  }, [curveInterval, segmentos]);

  const totalArea = segmentos.reduce((acc, s) => acc + s.area, 0);

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-purple-500 font-black text-4xl">
        Calculadora de la regla de Simpson
      </h1>

      {/* TOP: Panel + Gráfica */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Panel de parámetros */}
        <div className="w-full lg:w-72 bg-gray-100 rounded-2xl shadow-md p-6 flex flex-col gap-3">
          <h2 className="text-xl font-bold mb-2">Parámetros</h2>

          {/* Función */}
          <label className="text-sm font-medium">Función f(x)</label>
          <input
            className="p-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={fn}
            onChange={(e) => setFn(e.target.value)}
            placeholder="Ej: sin(x) + 2"
          />

          {/* Límite inferior */}
          <label className="text-sm font-medium mt-2">
            Límite inferior (a)
          </label>
          <input
            type="number"
            className="p-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
          />

          {/* Límite superior */}
          <label className="text-sm font-medium mt-2">
            Límite superior (b)
          </label>
          <input
            type="number"
            className="p-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
          />

          {/* n subdivisiones */}
          <label className="text-sm font-medium mt-2">Subdivisiones (n)</label>
          <input
            type="number"
            min={1}
            className="p-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
          />

          {noFunction && (
            <p className="text-red-500 text-xs mt-2">
              Escribe una función válida para visualizar la gráfica.
            </p>
          )}

          {simpsonInvalido && (
            <p className="text-red-500 text-xs mt-2">
              Para Simpson, n debe ser <b>par</b>.
            </p>
          )}
        </div>

        {/* Gráfica */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-4">
          {!noFunction && !simpsonInvalido ? (
            <VictoryChart
              domain={{ x: [-10, 10], y: [0, maxY] }}
              containerComponent={<VictoryVoronoiContainer />}
            >
              <VictoryAxis />
              <VictoryAxis dependentAxis />

              {/* Curva completa tenue */}
              <VictoryLine
                data={curveFull}
                style={{
                  data: {
                    stroke: "#AAAAAA",
                    strokeDasharray: "4 4",
                    opacity: 0.6,
                  },
                }}
              />

              {/* Áreas de Simpson */}
              {segmentos.map((s, i) => (
                <VictoryArea
                  key={i}
                  data={s.points}
                  style={{
                    data: {
                      fill:
                        i % 2 === 0
                          ? "rgba(168, 85, 247, 0.35)"
                          : "rgba(168, 85, 247, 0.18)",
                      stroke: "#9333ea",
                      strokeWidth: 1.5,
                    },
                  }}
                  labels={() => `Área ≈ ${s.area.toFixed(4)}`}
                  labelComponent={<VictoryTooltip />}
                />
              ))}

              {/* Curva resaltada en [a,b] */}
              <VictoryLine
                data={curveInterval}
                style={{
                  data: {
                    stroke: "#7e22ce",
                    strokeWidth: 3,
                  },
                }}
              />
            </VictoryChart>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-xl">
              {noFunction
                ? "Ingresa una función válida."
                : "Simpson requiere que n sea par."}
            </div>
          )}
        </div>
      </div>

      {/* Card de área total */}
      <div className="bg-white rounded-2xl shadow-md p-6 text-center space-y-1">
        <h2 className="text-2xl font-bold text-purple-900">
          Área total aproximada
        </h2>
        <p className="text-4xl font-extrabold text-purple-600 mt-2">
          {noFunction || simpsonInvalido
            ? "—"
            : isNaN(totalArea)
            ? "Indefinida"
            : totalArea.toFixed(6)}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Calculada mediante Simpson en [
          {a.toString() === "NaN" ? "Indefinido" : a},{" "}
          {b.toString() === "NaN" ? "Indefinido" : b}] con {n} subdivisiones.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-purple-500 font-black text-2xl">
          Código en Python
        </h2>
        <SimpsonPYCode a={a} b={b} n={n} fn={fn} invalidFn={noFunction || simpsonInvalido} />
      </div>
    </div>
  );
}
