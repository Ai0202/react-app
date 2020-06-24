import React, { createContext, useState, useCallback, useEffect } from "react"
import { firebaseAuth } from "../services/Firebase"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
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
    firebaseAuth.onAuthStateChanged(user => {
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