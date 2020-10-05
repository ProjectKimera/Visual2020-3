import React from 'react';
import introGif from '../img/intro.gif'

function Intro() {
    return(
        <div className="Intro my-5">
            <img src={introGif} className="img-fluid rounded" style={{width: 500}}/>
        </div>
    );

}
export default Intro;