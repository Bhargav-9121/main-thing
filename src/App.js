// src/App.js
import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  const b = 20
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App
