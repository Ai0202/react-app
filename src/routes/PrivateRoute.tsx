import React, { FC, useContext } from "react"
import { Route, Redirect } from "react-router-dom"

import { AuthContext } from "../contexts/Auth"
import { WithRouterProps } from "react-router"

type Props = {
  path: string
  // TODO 型難しい
  children: FC | WithRouterProps<any>
}

export const PrivateRoute: React.FC<Props> = ( { path, children } ) => {
  // TODO チェックするタイミングをレンダリングの前にする
  const { isSignedin } = useContext(AuthContext)

  return isSignedin || true ? <Route path={path} component={children as FC} /> : <Redirect to="/" />
}