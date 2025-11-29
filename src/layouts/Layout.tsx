import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="mx-auto max-w-4xl p-4 mt-10 grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
