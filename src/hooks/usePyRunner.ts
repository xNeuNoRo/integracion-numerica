import { useEffect, useRef, useState } from "react";

export function usePyRunner() {
  // Referencia al worker
  const workerRef = useRef<Worker | null>(null);
  // Estado de carga del codigo python
  const [loading, setLoading] = useState(false);
  // Estado de si el worker está listo
  const [ready, setReady] = useState(false);
  // Salida del código Python
  const [output, setOutput] = useState("");

  // Inicializar el worker al montar el hook
  useEffect(() => {
    // Mostrar mensaje de carga inicial
    setOutput("Cargando Python...\n");

    // Crear el worker
    const worker = new Worker(
      new URL("../workers/pyodide-worker.js", import.meta.url)
    );

    // Guardar referencia al worker
    workerRef.current = worker;

    // Manejar mensajes del worker
    worker.onmessage = (event) => {
      // Desestructurar el mensaje
      const { type, msg } = event.data;

      // Cuando el worker está listo
      if (type === "ready") {
        setReady(true);
        setOutput(
          "Python está listo, presiona el botón para calcular el área.\n"
        );
      }

      // Manejar salida estándar y de error
      if (type === "stdout") setOutput((prev) => prev + msg + "\n");
      if (type === "stderr") setOutput((prev) => prev + `[Error] ${msg}\n`);

      // Cuando la ejecución del código ha terminado
      if (type === "done") {
        setLoading(false);
      }
    };

    // Iniciar la carga de Pyodide en el worker
    worker.postMessage({ type: "init" });

    // Limpiar el worker al desmontar el hook
    return () => worker.terminate();
  }, []);

  // Función para ejecutar código Python
  const runPython = (code: string) => {
    setOutput(""); // limpiar output antes de cada ejecución
    setLoading(true); // establecer estado de carga
    // Usando la referencia guardada del worker, enviamos el código a ejecutar
    workerRef.current?.postMessage({ type: "run", code }); // enviar código al worker
  };

  return { ready, loading, output, runPython };
}
