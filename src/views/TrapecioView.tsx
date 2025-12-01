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
    </div>
  )
}
