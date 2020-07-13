import React, { FC, createContext, useState, useEffect } from "react"
import firebase, { firebaseAuth } from "../services/Firebase"

interface IContextProps {
  currentUser: any
  signin: () => void
  signout: () => void
  isSignin: () => boolean
}

const AuthContext = createContext({} as IContextProps)

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  const signin = async () => {
    console.log('サインイン')
    
    try {

    } catch (e) {

    }
  }

  const signout = async () => {
    console.log('サインアウト')
    
    await firebaseAuth.signOut()
  }

  // サインインのチェック
  const isSignin = () => {
    return false
  }

  useEffect(() => {
    // firebaseAuth.onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, signin, signout, isSignin }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}