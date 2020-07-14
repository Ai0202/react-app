import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ResetStyle } from "../styles/reset"
import { Home } from "../components/pages/Home"
import { Members } from "../components/pages/Members"
import MembersCreate from "../components/pages/MembersCreate"
import { AboutUs } from "../components/pages/AboutUs"
import { Contact } from "../components/pages/Contact"
import { Signin } from "../components/pages/Signin"
import { Header } from "../components/organisms/Header"

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
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  )
}

