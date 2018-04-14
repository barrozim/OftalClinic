import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <nav class="navbar header-top fixed-top navbar-expand-lg  navbar-dark bg-dark">
      <a class="navbar-brand" href="#/home">OftalClinic</a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav animate side-nav">
          <li class="nav-item">
            <a class="nav-link" href="#/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/cliente">Cliente</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/consulta">Consulta</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/sobre">Sobre</a>
          </li>
        </ul>
      </div>
    </nav>
)