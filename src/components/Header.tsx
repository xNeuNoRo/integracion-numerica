import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 px-24">
      <div className="flex justify-between p-4 items-center">
        <div>
          <Link to="/" className="text-white font-bold text-2xl">
            Integración Numérica
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
