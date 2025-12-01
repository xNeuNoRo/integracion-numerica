import { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function CopyBtn({ targetId }: { targetId: string }) {
  // estado para mostrar "copiado"
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Obtener el texto del elemento objetivo
    const element = document.getElementById(targetId);
    if (!element) return;

    // Copiar el texto al portapapeles
    const text = element.innerText;

    // Usar la API del portapapeles
    navigator.clipboard.writeText(text).then(() => {
      // Mostrar el ícono de "copiado" temporalmente
      setCopied(true);
      // Volver al ícono original después de 1.5 segundos
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`${copied ? "bg-green-200" : "bg-blue-500 hover:bg-blue-700"} hover:cursor-pointer absolute top-8 right-6 flex items-center gap-1 px-2 py-1 text-white text-xs rounded-md shadow active:scale-95 transition-all duration-150`}
    >
      {copied ? (
        <CheckIcon className="h-5 w-5 text-green-400 font-black" />
      ) : (
        <ClipboardIcon className="h-5 w-5" />
      )}
    </button>
  );
}
