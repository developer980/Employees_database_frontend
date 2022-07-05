import logo from "./logo.svg";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import add_employee from "./pages/add_employee";
import employees from "./pages/employees";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/adauga-angajat" component={add_employee} />
          <Route path="/lista-angajati" component={employees} />
        </Switch>
      </div>
    );
  }
}

export default App;
