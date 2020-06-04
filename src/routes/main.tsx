import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ResetStyle } from "../styles/reset";
import { Home } from "../components/pages/Home";
import { Members } from "../components/pages/Members";
import MembersCreate from "../components/pages/MembersCreate";
import { AboutUs } from "../components/pages/AboutUs";
import { Header } from "../components/organisms/Header";

export const Routes = () => {
  return (
    <Router>
      <ResetStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/members" exact component={Members} />
        <Route path="/members/create" component={MembersCreate} />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
    </Router>
  );
}

