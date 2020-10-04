import React from 'react';
import './App.css';

import About from "./components/About";
import Taller1 from "./components/Taller1";
import Repositorio from "./components/Taller1";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-2" href="#">Computación Visual</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">About us<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">Repositorio</a>
            </li>
            <li className="nav-item dropdown mx-2">
              <a className="nav-link dropdown-toggle mx-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Talleres
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Taller 1</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <About />


    </div>
  );
}

export default App;
