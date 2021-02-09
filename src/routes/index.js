import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Search from "../pages/Search";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
};

export default Routes;
