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
import { routes } from "../url"

export const Routes = () => {
  return (
    <Router>
      <ResetStyle />
      <Header />
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.members} exact component={Members} />
        <Route path={routes.memberCreate} component={MembersCreate} />
        <Route path={routes.aboutus} component={AboutUs} />
        <Route path={routes.contact} component={Contact} />
        <Route path={routes.signin} component={Signin} />
      </Switch>
    </Router>
  )
}

