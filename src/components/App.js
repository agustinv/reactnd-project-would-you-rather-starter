import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NoMatch from './NoMatch'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

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
