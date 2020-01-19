import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Mainframe from './Mainframe'
import { Button, Sidebar, Segment, Menu, Icon, Header, Image, Breadcrumb, Card } from 'semantic-ui-react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route exact path="/mainframe">
            <Mainframe></Mainframe>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
