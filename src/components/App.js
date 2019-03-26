import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        {this.props.authenticated === true
          ? null
          : <div>
              <Dashboard />
          </div>}
      </Fragment>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authenticated: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
