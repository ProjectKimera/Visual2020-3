import React from 'react';
import profile from '../img/profile.jpg'

function About() {
    return(
        <div className="About container my-5">

            <div className="row">
                <div className="card col-sm m-2">
                    <img src={profile} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Diego Alexander Araque Molina</h5>
                        <p>email: daaraquem@unal.edu.co</p>
                        <p>git: DiegoAraque1207</p>
                    </div>
                </div>
                <div className="card col-sm m-2">
                    <img src={profile} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Manuel Felipe Bejarano Baquero</h5>
                        <p>email: mfbejaranob@unal.edu.co</p>
                        <p>git: ManuelBejarano</p>
                    </div>
                </div>
                <div className="card col-sm m-2">
                    <img src={profile} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Daniel Camilo Perez Ceron</h5>
                        <p>email: dacperezce@unal.edu.co</p>
                        <p>git: dacperezce</p>
                    </div>
                </div>
                <div className="card col-sm m-2">
                    <img src={profile} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Jhonatan Sandoval Velasco</h5>
                        <p>email: jsandovalv@unal.edu.co</p>
                        <p>git: JhonatanSV</p>
                    </div>
                </div>
            </div>


        </div>
    );

}
export default About;