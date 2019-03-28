import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NoMatch from './NoMatch'
import Nav from './Nav'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import SignInForm from './SignInForm'

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
              ? <SignInForm />
              : <Switch>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/leaderboard' exact component={LeaderBoard} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/questions/:id' component={QuestionPage} />
                  <Route component={NoMatch} />
              </Switch>}
          </div>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(App);
