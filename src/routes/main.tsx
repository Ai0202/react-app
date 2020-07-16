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
import { PrivateRoute } from "./PrivateRoute"
import { GuestRoute } from "./GuestRoute"
import { NotFound } from "../components/pages/NotFound"
import { News } from "../components/pages/News"

export const Routes = () => {
  return (
    <Router>
      <ResetStyle />
      <Header />
      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.members} exact component={Members} />
        <Route path={routes.aboutus} component={AboutUs} />
        <Route path={routes.contact} component={Contact} />
        <Route path={routes.news} component={News} />
        <GuestRoute path={routes.signin} children={Signin} />
        <PrivateRoute path={routes.memberCreate} children={MembersCreate} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

