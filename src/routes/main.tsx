import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ResetStyle } from "../styles/reset";
import { Home } from "../components/pages/Home";
import { Members } from "../components/pages/Members";
import { AboutUs } from "../components/pages/AboutUs";

export const Routes = () => {
  return (
    <Router>
      <ResetStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/members" component={Members} />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
    </Router>
  );
}

