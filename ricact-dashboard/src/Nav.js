import './Nav.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Link} from'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <div className="Main">
      <Link to='/'>
     <button className="app-btn">Home</button> 
      </Link>
      <Link to='/github'>
     <button className="app-btn">Github</button> 
      </Link>
      </div>
      <div className="Side">
      <Link to='/'>
     <button className="app-btn">Close</button> 
      </Link>
      </div>
    </div>
  );
}

export default Nav;
