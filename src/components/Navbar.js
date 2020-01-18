import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


class NavBar extends Component{

    render(){
        return(
            <nav className="navbar navbar-light fixed-top navbar-expand-md">
                <div className="container">
                    {/* <a class="navbar-brand" href="#">
                        <img src="http://placehold.it/150x50?text=Logo" alt="">
                    </a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand" id="titleName" >  <span id="titleColor">Synchro-9 </span> </Link>

    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home
              </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/music">Music</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Videos">Videos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Comments">Comments</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        )
    }
}

export default NavBar;