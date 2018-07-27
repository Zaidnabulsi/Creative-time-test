import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginPageWrapper from './auth/LoginPageWrapper'
import RegisterPageWrapper from './auth/RegisterPageWrapper'
import HomeWrapper from './core/HomeWrapper'
import "../assets/assets/scss/material-dashboard-pro-react.css"


class MainRouter extends Component {
  // Removes the server-side injected CSS when React component mounts
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return (<div>
      <Switch>
        <Route exact path="/login" component={LoginPageWrapper}/>
        <Route path="/register" component={RegisterPageWrapper}/>
        <Route path="/goopsdr" component={HomeWrapper}/>
      </Switch>
    </div>)
  }
}

export default MainRouter
