import { Link } from "react-router-dom";
import SimpsonCalc from "../components/simpson/SimpsonCalc";
import SimpsonIntro from "../components/simpson/SimpsonIntro";

export default function SimpsonView() {
  return (
    <div className="container space-y-20">
      <section>
        <SimpsonIntro />
      </section>
      <section>
        <SimpsonCalc />
      </section>
      <Link
        to={"/"}
        className="block p-4 bg-blue-500 text-white text-center text-lg rounded-xl font-semibold hover:scale-105 transition-transform mb-10"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
