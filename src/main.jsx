import React from "react";
import ReactDOM from "react-dom/client";
// Importamos bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
// Importamos Componentes react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Imprtamos los componentes del as rutas
import Layout from "./components/Layout";
import Actor from "./components/Actor";
import Home from "./components/Home";
import Episode from "./components/Episode";
import EpisodeDetail from "./components/EpisodeDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Ruts Anidada */}
      <Route path="/" element={<Layout />}>
        {/* Ruta para el raiz --> home */}
        <Route index element={<Home />} />
        <Route path="actor" element={<Actor />} />
        {/* Ruta Anidada */}
        <Route path="episode" element={<Episode />}>
          <Route path=":episodeId" element={<EpisodeDetail/>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
