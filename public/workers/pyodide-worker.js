let pyodide;
let loading = false;

// Manejador de mensajes del worker
self.onmessage = async (event) => {
  // Desestructurar el mensaje recibido
  // code => código Python a ejecutar
  // type => tipo de mensaje (init, run)
  const { type, code } = event.data;

  // Si el mensaje es de tipo "init", cargar Pyodide
  if (type === "init") {
    // Evitar cargas múltiples
    if (loading) return;
    loading = true;

    // Cargar Pyodide desde el CDN oficial
    importScripts("https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js");

    // Inicializar Pyodide con manejo de stdout y stderr
    pyodide = await loadPyodide({
      // Redirigir la salida estándar y de error al hilo principal mediante el posteo de mensajes
      stdout: (msg) => self.postMessage({ type: "stdout", msg }),
      stderr: (msg) => self.postMessage({ type: "stderr", msg }),
    });

    // Cargar el paquete numpy
    await pyodide.loadPackage("numpy");

    // Notificar al hilo principal que Pyodide está listo
    self.postMessage({ type: "ready" });
  }

  // Si el mensaje es de tipo "run", ejecutar el código Python recibido
  if (type === "run") {
    // Asegurarse de que Pyodide esté cargado
    if (!pyodide) return;
    // Ejecutar el código Python de forma asíncrona
    try {
      await pyodide.runPythonAsync(code);
      // Notificar al hilo principal que la ejecución ha terminado
      // No se envia el output aqui pq ya lo hara automaticamente por stdout y stderr
      self.postMessage({ type: "done" });
    } catch (err) {
      // En caso de error, enviar el mensaje de error al hilo principal
      self.postMessage({ type: "stderr", msg: err.toString() });
    }
  }
};
