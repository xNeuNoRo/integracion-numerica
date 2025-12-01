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
    </div>
  )
}
