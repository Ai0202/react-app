import React, { FC, createContext, useState, useCallback, useEffect } from "react"
import { firebaseAuth } from "../services/Firebase"

interface IContextProps {
  currentUser?: any
  signin: any
  signout: any
  loading: boolean
}

const AuthContext = createContext({} as IContextProps)

const AuthProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)

  const signin = useCallback(async (email, password) => {
    try {
      setLoading(true)
      await firebaseAuth.signInWithEmailAndPassword(email, password)
    } catch (e) {
      console.error(e.code, e.message)
    }
  }, [])

  const signout = useCallback(async () => {
    try {
      setLoading(true)
      await firebaseAuth.signOut()
    } catch (e) {
      console.error(e.code, e.message)
    }
  }, [])

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user: any) => {
      setLoading(false)
      setCurrentUser(user)
    })
  })

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signin,
        signout,
        loading,
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }