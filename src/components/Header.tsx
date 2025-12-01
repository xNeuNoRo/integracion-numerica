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
      <div className="flex flex-col gap-10 md:gap-6 xl:gap-0 xl:flex-row xl:justify-between p-4 items-center">
        <div className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 xl:hover:-rotate-2">
          <Link to="/" className="flex items-start text-white font-bold text-2xl">
            <CalculatorIcon className="h-[2em] w-[2em] shrink-0 inline-block mr-2 text-white" />
            <div className="flex flex-col leading-snug">
              <span className="whitespace-nowrap">Integración Numérica</span>
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
