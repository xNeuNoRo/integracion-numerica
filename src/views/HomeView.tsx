import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <div className="space-y-12">

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://picsum.photos/500/350?random=1"
          alt="Integración numérica"
          className="rounded-xl shadow-lg max-w-md"
        />

        <div className="space-y-3">
          <h1 className="text-4xl font-black text-blue-600">
            Proyecto de Integración Numérica
          </h1>
          <p className="text-gray-700 text-lg">
            Bienvenido a nuestra aplicación interactiva sobre la Regla del 
            Trapecio y la Regla de Simpson. Este proyecto forma parte del curso 
            de <strong>Cálculo Integral</strong>, impartido por el profesor 
            <strong> Maximiliano Álvarez Sepúlveda</strong>.
          </p>
          <p className="text-gray-600">
            Aquí podrás visualizar, analizar y comparar métodos de integración 
            numérica mediante gráficas dinámicas y explicaciones detalladas.
          </p>
        </div>
      </section>

      {/* SECCIÓN SOBRE EL CURSO */}
      <section className="bg-blue-50 p-6 rounded-xl shadow-md space-y-3">
        <h2 className="text-2xl font-bold text-blue-700">
          Curso: Cálculo Integral — Sección 12
        </h2>
        <p className="text-gray-700">
          Este proyecto pertenece a la unidad de <strong>Integración Numérica</strong>, 
          donde se estudian técnicas aproximadas para resolver integrales 
          definidas mediante subdivisiones y análisis de la forma de la función.
        </p>
      </section>

      {/* MIEMBROS DEL GRUPO */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Integrantes del Grupo</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1 */}
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <img
              src="https://picsum.photos/200?random=2"
              alt="Integrante"
              className="rounded-full w-28 h-28 mx-auto mb-3 object-cover"
            />
            <p className="text-lg font-semibold">Nombre del Integrante</p>
            <p className="text-gray-500 text-sm">Rol: Investigador</p>
          </div>

          {/* 2 */}
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <img
              src="https://picsum.photos/200?random=3"
              alt="Integrante"
              className="rounded-full w-28 h-28 mx-auto mb-3 object-cover"
            />
            <p className="text-lg font-semibold">Nombre del Integrante</p>
            <p className="text-gray-500 text-sm">Rol: Diseñador UI</p>
          </div>

          {/* 3 */}
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <img
              src="https://picsum.photos/200?random=4"
              alt="Integrante"
              className="rounded-full w-28 h-28 mx-auto mb-3 object-cover"
            />
            <p className="text-lg font-semibold">Nombre del Integrante</p>
            <p className="text-gray-500 text-sm">Rol: Programador</p>
          </div>
        </div>
      </section>

      {/* ACCESOS RÁPIDOS */}
      <section className="flex flex-col md:flex-row gap-4">
        <Link
          to={"/trapecio"}
          className="flex-1 p-5 mb-10 bg-orange-400 text-white text-center text-lg rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          Ir a Regla del Trapecio
        </Link>
        <Link
          to={"/simpson"}
          className="flex-1 p-5 mb-10 bg-purple-500 text-white text-center text-lg rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          Ir a Regla de Simpson
        </Link>
      </section>

    </div>
  );
}
