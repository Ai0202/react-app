import React, { FC, useContext } from "react"
import firebase from "../../../services/Firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import styped from "styled-components"

import { AuthContext } from "../../../contexts/Auth"

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
}

export const SigninForm: FC = (props) => {
  const { signin } = useContext(AuthContext)
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}