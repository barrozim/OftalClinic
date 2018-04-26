import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
<nav className="navbar header-top sticky-top navbar-expand-lg  navbar-dark bg-primary">
    <a className="navbar-brand" href="#/home">OftalClinic</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav animate side-nav">
        <li className="nav-item">
          <a className="nav-link" href="#/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/cliente">Cliente</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/medico">Médico</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/consulta">Consulta</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/relatorio">Relatório</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/usuario">Usuário</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/sobre">Sobre</a>
        </li>
      </ul>
    </div>
  </nav>
)