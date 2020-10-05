import React from 'react';
import gitPng from '../img/GitHub.png'

function Repositorio() {
    return(
        <div className="Repositorio container my-5">
            <div className="row">
                <div className="col-sm m-2">
                    <img src={gitPng} className="img-fluid rounded" style={{width: 500}}/>
                </div>
                <div className="col-sm m-2">
                    <a href="https://github.com/ProjectKimera/Visual2020-3" className="mt-6" target="_blank">
                        <h1>Repositorio</h1>
                    </a>
                </div>
            </div>
        </div>
    );

}
export default Repositorio;