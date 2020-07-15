import React, { FC, useContext } from "react"
import { Route, Redirect } from "react-router-dom"

import { AuthContext } from "../contexts/Auth"

type Props = {
  path: string
  children: FC
}

export const GuestRoute: React.FC<Props> = ({ path, children }) => {
  const { isSignedin } = useContext(AuthContext)
  
  return isSignedin ? <Redirect to="/" /> : <Route path={path} component={children} />
}