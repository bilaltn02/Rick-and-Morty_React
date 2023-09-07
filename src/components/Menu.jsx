import React from 'react'
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-5">
      <div className="collapse navbar-collapse d-flex justify-content-center" >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 fs-5">
          <li className="nav-item active">
            {/* Enlace al componente Home */}
            <Link className="nav-link text-success" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item text-success">
              {/* Enlace al componente Episodios */}
            <Link className="nav-link" to="/episode">
              Episodios
            </Link>
          </li>
          <li className="nav-item text-success">
              {/* Enlace al componente Actor */}
            <Link className="nav-link" to="/actor">
              Actor
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu