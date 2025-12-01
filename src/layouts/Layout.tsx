import { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MotionElement from "../components/MotionElement";

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -25 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 25 },
    }),
    []
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="mx-auto max-w-5xl w-full p-4 mt-10 grow">
          <AnimatePresence mode="wait" initial={false}>
            <MotionElement
              as="div"
              key={location.pathname} // Usar la ruta como key para las animaciones ya que cada cambia cada ruta al navegar
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              {outlet}
            </MotionElement>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
}
