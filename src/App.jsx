import React, {Component} from 'react';

// External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'

//Function
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userLogedIn: false
    }
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    const authToken = localStorage.getItem('authTokenUser')
    if (authToken) {
      this.setState({
        userLogedIn: true
      })
    }
  }

  logOut() {
    localStorage.removeItem('authTokenUser')
    this.setState({
      userLogedIn: false
    })
  }

  render() {
    const { userLogedIn } = this.state
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/auth/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

//<Menu logOut={this.logOut} userLogedIn={userLogedIn} /> 