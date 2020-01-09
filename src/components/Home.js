import React, {Component} from 'react';
import './Home.css';
// import {Link} from 'react-router-dom';



 class Home extends Component{

    render(){
        return(
            // <h1>Homepahe</h1>


            <div id="root">
                <div className="container-fluid">
                      <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title"><u>Welcome to <span className="titless">Synchro-9</span></u></h5>
                            <p className="card-text"> Search for your Favorite Music, Lyrics, and Videos.</p>
                            
                        </div>
                    </div>
                </div>
            </div>


                    






            
        )
    }
}

export default Home;