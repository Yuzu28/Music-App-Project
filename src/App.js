import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MusicSearch from './components/MusicSearch';
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar}/>
        <Route exact path="/" component={Home}/>


        <Route  exact path="/music" component={MusicSearch}/>


      </Router>
      {/* <h1>John is awesome</h1> */}
    </div>
  );
}

export default App;
