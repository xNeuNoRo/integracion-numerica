import { Link } from "react-router-dom";
import MemberCard from "../components/MemberCard";

export default function HomeView() {
  return (
    <div className="space-y-12">

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/home.jpg"
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
          Curso: Cálculo Integral (2025-C3) — Miércoles Sección 12
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
          <MemberCard fullname="Ángel González Muñoz" matricula="2025-1122" photoUrl="/integrantes/angel.webp" />
          <MemberCard fullname="Ismael Vásquez" matricula="2025-1204" photoUrl="/integrantes/ismael.jpeg" />
          <MemberCard fullname="Jhazan Omal Lebrón Encarnación" matricula="2025-0688" photoUrl="/integrantes/omal.jpeg" />
          <MemberCard fullname="Cesar Augusto Rivera Pantaleón" matricula="2025-0751" photoUrl="/integrantes/default-member-img.webp" />
          <MemberCard fullname="Danny Peña Adames" matricula="2025-1124" photoUrl="/integrantes/danny.jpeg" />
          <MemberCard fullname="Andy Yohel Pion Carpio" matricula="2025-0460" photoUrl="/integrantes/default-member-img.webp" />
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
