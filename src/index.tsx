import React from "react"
import ReactDOM from "react-dom"
import { Routes } from "./routes/index"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { AuthProvider } from "./contexts/Auth"

import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
)
