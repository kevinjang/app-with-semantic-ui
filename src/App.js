import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Mainframe from "./Mainframe";
import {
  Button,
  Sidebar,
  Segment,
  Menu,
  Icon,
  Header,
  Image,
  Breadcrumb,
  Card,
} from "semantic-ui-react";

import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

// import {} from 'react-router'

function App() {
  const history = useHistory();
  return (
    <div className="App">
      {/* test */}
      {/* <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login></Login>
          </Route>
          <Route exact path="/mainframe">
            <Mainframe></Mainframe>
          </Route>
        </Switch>
      </BrowserRouter> */}
      <HashRouter>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/mainframe">
          <Mainframe></Mainframe>
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
