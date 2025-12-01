import {
  CalculatorIcon,
  ChartBarIcon,
  ChartPieIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 px-24">
      <div className="flex justify-between p-4 items-center">
        <div className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 hover:-rotate-2">
          <Link to="/" className="flex text-white font-bold text-2xl">
            <CalculatorIcon className="h-12 w-8 inline-block mr-2 text-white" />
            <div className="flex flex-col">
              Integración Numérica
              <span className="text-xs text-gray-300">
                Calculo Integral, Prof. Maximiliano.
              </span>
            </div>
          </Link>
        </div>
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 p-2 text-white font-semibold rounded-xl transition-colors duration-200 ease-in-out ${isActive ? "bg-orange-400" : "bg-transparent"}`
            }
          >
            <HomeIcon className="h-5 w-5 inline-block mr-1 text-white" />
            Inicio
          </NavLink>
          <NavLink
            to="/trapecio"
            className={({ isActive }) =>
              `flex items-center gap-1 p-2 text-white font-semibold rounded-xl transition-colors duration-200 ease-in-out ${isActive ? "bg-orange-400" : "bg-transparent"}`
            }
          >
            <ChartBarIcon className="h-5 w-5 inline-block mr-1 text-white" />
            Trapecio
          </NavLink>
          <NavLink
            to="/simpson"
            className={({ isActive }) =>
              `flex items-center gap-1 p-2 text-white font-semibold rounded-xl transition-colors duration-200 ease-in-out ${isActive ? "bg-orange-400" : "bg-transparent"}`
            }
          >
            <ChartPieIcon className="h-5 w-5 inline-block mr-1 text-white" />
            Simpson
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
