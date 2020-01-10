import React, {Component} from 'react';
import './MusicSearch.css';
// import {Link} from 'react-router-dom';
// import Navbar from './components/Navbar';



 class MusicSearch extends Component{

    state ={

        artistQuery: ''
    }


    //below fires the moment when the value of the element is changed
    updateArtistQuery = (path) =>{
        console.log('path.target.value', path.target.value);

        //update the component
        this.setState({ artistQuery: path.target.value });
    }

    searchArtist = (e) =>{
        e.preventDefault();

        console.log('this.state', this.state);
       
    }

    render(){
        return(
            <div className="music-container">
                <h1 className="musicSearch"> Music Search</h1>

                <form  onSubmit={this.searchArtist} className="navbar-form" role="search">
                        <div className="input-group">
                            <input onChange={this.updateArtistQuery}  type="text" className="form-control" placeholder="Search for an Artist..." />
                                <div className="input-group-append">
                                    <button onClick={this.searchArtist}  className="btn btn-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                        </div>
                </form>



            </div>
   
        )
    }
}

export default MusicSearch;
