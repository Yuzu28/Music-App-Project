import React, {Component} from 'react';
// import './NavBar.css';
import {Link} from 'react-router-dom';


class NavBar extends Component{

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div class="container">
                    {/* <a class="navbar-brand" href="#">
                        <img src="http://placehold.it/150x50?text=Logo" alt="">
                    </a> */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand" id="titleName" >  <span id="titleColor">Synchro-9 </span> </Link>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home
              </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/music">Music</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Lyrics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Videos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        )
    }
}

export default NavBar;