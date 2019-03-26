import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NoMatch from './NoMatch'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          <div className='container'>
            { authedUser === null
              ? null
              : <Switch>
                  <Route path='/' exact component={Dashboard} />
                  <Route component={NoMatch} />
              </Switch>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
