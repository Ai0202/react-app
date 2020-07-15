import React, { FC, useContext } from "react"
import { Route, Redirect } from "react-router-dom"

import { AuthContext } from "../contexts/Auth"

type Props = {
  path: string
  children: FC
}

export const PrivateRoute: React.FC<Props> = ( { path, children } ) => {
  const { isSignedin } = useContext(AuthContext)

  return isSignedin ? <Route path={path} component={children} /> : <Redirect to="/" />
}