import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import Movies from './components/Movies'
import NavBar from './components/NavBar'
import Customers from './components/Customers'
import MovieForm from './components/MovieForm'
import LoginForm from './common/LoginForm'
import NotFound from './components/notFound'
import Register from './common/Register'
import Rentals from './components/rentals'

class App extends Component {
  render() {
    return(
      <>
      <NavBar />
      <main className ='container'>
        <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/reantals" component={Rentals}></Route>
        <Route path="/notfound" component={NotFound}></Route>
        <Route path="/movie/:id" component={MovieForm}></Route>
        <Route path="/register" component={Register}></Route>
        <Redirect exact from="/" to="/movies" />
        <Redirect to="/notfound" />
        </Switch>
      </main>
      </>
    )
  }
}

export default App