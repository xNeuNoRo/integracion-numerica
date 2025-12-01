import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 px-24">
      <div className="flex justify-between p-4 items-center">
        <div className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 hover:-rotate-2">
          <Link to="/" className="flex flex-col text-white font-bold text-2xl">
            Integración Numérica
            <span className="text-xs text-gray-300">Calculo Integral, Prof. Maximiliano.</span>
          </Link>
        </div>
        <nav className="flex gap-4">
          <NavLink to="/" className={({isActive}) => isActive ? "bg-orange-400 rounded-xl p-2 text-white font-semibold" : "text-white font-semibold p-2"}>
            Inicio
          </NavLink>
          <NavLink to="/trapecio" className={({isActive}) => isActive ? "bg-orange-400 rounded-xl p-2 text-white font-semibold" : "text-white font-semibold p-2"}>
            Trapecio
          </NavLink>
          <NavLink to="/simpson" className={({isActive}) => isActive ? "bg-orange-400 rounded-xl p-2 text-white font-semibold" : "text-white font-semibold p-2"}>
            Simpson
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
