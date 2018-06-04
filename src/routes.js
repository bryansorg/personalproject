import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/login/Login";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/Login" component={Login} />
  </Switch>
);
