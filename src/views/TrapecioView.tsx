import { Link } from "react-router-dom";
import TrapecioCalc from "../components/trapecio/TrapecioCalc";
import TrapecioIntro from "../components/trapecio/TrapecioIntro";

export default function TrapecioView() {
  return (
    <div className="container space-y-20">
      <section>
        <TrapecioIntro />
      </section>
      <section>
        <TrapecioCalc />
      </section>
      <Link
          to={"/simpson"}
          className="block mb-10 p-4 bg-purple-500 text-white text-center text-lg rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          Ir a Regla de Simpson
        </Link>
    </div>
  )
}
