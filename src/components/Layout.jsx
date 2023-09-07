import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

// Componente contenedor de toda la nuestra aplicación
const Layout = () => {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <main>
        {/* IMPORTANTE!!!! Componente donde se van a cargar los componentes de las rutas anidadas */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
