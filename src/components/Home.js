import React, {Component} from 'react';
import './Home.css';
import beat from './images/beat.gif' // Tell Webpack this JS file uses this image

// import {Link} from 'react-router-dom';



 class Home extends Component{

    render(){
        return(
            // <h1>Homepahe</h1>


            <div id="root">
                <div className="container-fluid wallxpaper">
                      <div className="card cardContainer" >
                        <div className="card-body">
                            <h5 className="card-title siteTile"><u>Welcome to <span className="titless">Synchro-9</span></u></h5>
                            <p className="card-text siteInfo"> Search for your Favorite Music, Lyrics, and Videos.</p>
                            
                        </div>
                    </div>
                    <img className="wallpaperxxx" src={beat} alt="Logo" />


                </div>


            </div>


                    






            
        )
    }
}

export default Home;