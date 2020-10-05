import React, {Component} from 'react';
import './App.css';

import About from "./components/About";
import Taller1 from "./components/Taller1";
import Repositorio from "./components/Repositorio";
import Intro from "./components/Intro";

class App extends React.Component{
  constructor(props){
    super(props);
    this.clikAbout = this.clikAbout.bind(this);
    this.clikRepo = this.clikRepo.bind(this);
    this.clikIntro = this.clikIntro.bind(this);
    this.clikTaller1 = this.clikTaller1.bind(this);
    this.state = {
      isIntro: true,
      isAbout: false,
      isRepo: false,
      isTaller1: false,
    };
  }
  clikAbout(){
    this.setState({
      isIntro: false,
      isAbout: true,
      isRepo: false,
      isTaller1: false,
    })
  }
  clikIntro(){
    this.setState({
      isIntro: true,
      isAbout: false,
      isRepo: false,
      isTaller1: false,
    })
  }
  clikRepo(){
    this.setState({
      isIntro: false,
      isAbout: false,
      isRepo: true,
      isTaller1: false,
    })
  }
  clikTaller1(){
    this.setState({
      isIntro: false,
      isAbout: false,
      isRepo: false,
      isTaller1: true,
    })
  }
  
  render() {
    const isAbout = this.state.isAbout;
    const isIntro = this.state.isIntro;
    const isRepo = this.state.isRepo;
    const isTaller1 = this.state.isTaller1;

    let pagina;
    if(isAbout){
      pagina = <About/>;
    }else if(isIntro){
      pagina = <Intro />
    }else if(isRepo){
      pagina = <Repositorio />
    }else if(isTaller1){
      pagina = <Taller1 />
    }

    return (
      <div className="App">        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand mx-2"  onClick={()=>{this.clikIntro()}}>Computación Visual</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-2">
                <a className="nav-link"  onClick={()=>{this.clikAbout()}}>About us<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" onClick={()=>{this.clikRepo()}}>Repositorio</a>
              </li>
              <li className="nav-item dropdown mx-2">
                <a className="nav-link dropdown-toggle mx-2" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Talleres
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" onClick={()=>{this.clikTaller1()}}>Taller 1</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {pagina}
      </div>
    );
  }

}

export default App;
