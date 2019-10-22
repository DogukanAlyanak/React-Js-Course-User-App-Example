import React from 'react'
import Navbar from './layout/Navbar'
import Users from './components/Users'
import AddUser from './forms/AddUser'
import UpdateUser from './forms/UpdateUser'
import NotFound from './pages/NotFound'
import Contribute from './pages/Contribute'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/App.css'

const App = () => {


  return (
    <Router>
      <div className="App">
        <Navbar pageTitle={"myApp"} /> 
        <div className="container">
          <header className="App-header">
          </header>
          <br />
          <Switch>
          <Route exact path = "/" component = {Users} />
          <Route exact path = "/adduser" component = {AddUser} />
          <Route exact path = "/github" component = {Contribute} />
          <Route exact path = "/edit/:id" component = {UpdateUser} />
          <Route component = {NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  ) 
}
export default App;