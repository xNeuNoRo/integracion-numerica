import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomeView from "./views/HomeView";
import TrapecioView from "./views/TrapecioView";
import SimpsonView from "./views/SimpsonView";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<HomeView/>} index />
            <Route path="/trapecio" element={<TrapecioView/>} />
            <Route path="/simpson" element={<SimpsonView/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
