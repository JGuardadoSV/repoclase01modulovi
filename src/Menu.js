import React from 'react';
import { NavLink  } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <NavLink  className="navbar-brand" to="/">Mi Aplicación</NavLink >
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/"  activeClassName="active"> Inicio</NavLink >
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/listado"  activeClassName="active">Listado</NavLink >
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/registro"  activeClassName="active">Registro</NavLink >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Menu;
