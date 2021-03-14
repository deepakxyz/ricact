import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './Nav';
import Home from './Home';
import Github from './github/Github';
import Todo from './apps/todo/Todo'

function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
        <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/github"><Github/></Route>
            <Route path="/todo"><Todo/></Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
