import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Trapecio from "./views/Trapecio";
import Simpson from "./views/Simpson";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} index />
            <Route path="/trapecio" element={<Trapecio/>} />
            <Route path="/simpson" element={<Simpson/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
