import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer, Home, Map, User } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Map" exact component={() => <Map />} />
          <Route path="/User" exact component={() => <User />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


