import React, { FC, createContext, useState } from "react"
import { firebaseAuth } from "../services/Firebase"



interface IContextProps {
  currentUser: any
  /* setCurrentUser: (user: object) => void */
  signin: () => void
  signout: (history: any) => void
  isSignedin: boolean
  checkSignedin: () => void
}

const AuthContext = createContext({} as IContextProps)

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [isSignedin, setIsSignedin] = useState(false)

  const signin = async () => {
    console.log('サインイン')
    
    try {

    } catch (e) {

    }
  }

  const signout = async (history: any) => {
    await firebaseAuth.signOut()
    history.push("/")
  }

  const checkSignedin = () => {
    firebaseAuth.onAuthStateChanged(user => {
      setIsSignedin(!!user)
      setCurrentUser({ ...user })
    })
  }

  return (
    <AuthContext.Provider value={{ currentUser, signin, signout, isSignedin, checkSignedin }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}