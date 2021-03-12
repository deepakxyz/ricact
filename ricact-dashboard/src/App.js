import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './Nav';
import Home from './Home';
import Github from './github/Github';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
        <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/github"><Github/></Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
