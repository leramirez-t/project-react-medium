import React, { Component } from 'react';

// External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PostDetails from './pages/post-details';
import NewPost from './pages/NewPost';

//Function
export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userLogedIn: false
    }
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount () {
    const authToken = localStorage.getItem('authTokenUser')
    if (authToken) {
      this.setState({
        userLogedIn: true
      })
    }
  }

  logOut () {
    localStorage.removeItem('authTokenUser')
    this.setState({
      userLogedIn: false
    })
  }

  render () {
    const { userLogedIn } = this.state

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              {
                userLogedIn ? <Dashboard /> : <Home />
              }
            </Route>
            <Route exact path="/auth/login">
              <Login />
            </Route>
            <Route exact path="/newpost">
            {
                userLogedIn ? <NewPost /> : <Home />
              }
            </Route>
              <Route exact path='/:id' render={(props) => userLogedIn ? <PostDetails {...props} /> : <Home />} />
            <PostDetails />
          </Switch>
        </div>
      </Router>
    );
  }

}

//<Menu logOut={this.logOut} userLogedIn={userLogedIn} /> 