import { usePyRunner } from "../hooks/usePyRunner";

type PyRunnerProps = {
  code: string;
  readyToRun: boolean;
};

export default function PyRunner({ code, readyToRun }: PyRunnerProps) {
    // Hook personalizado para manejar la ejecución de código Python con un worker
  const { ready, loading, runPython, output } = usePyRunner();

  return (
    <div className="bg-gray-800 p-4 rounded-xl text-white space-y-4 shadow-md">
      <button
        onClick={() => runPython(code)}
        disabled={!ready || loading || !readyToRun}
        className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 disabled:bg-gray-600 px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Ejecutar código Python
      </button>

      <pre className="bg-black text-green-400 p-4 rounded-lg text-sm whitespace-pre overflow-auto h-24">
        {output}
      </pre>
    </div>
  );
}
