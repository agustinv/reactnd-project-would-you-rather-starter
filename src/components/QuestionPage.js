import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoMatch from './NoMatch'
import QuestionResult from './QuestionResult'
import QuestionAnswer from './QuestionAnswer'
import { formatQuestionResults } from '../utils/helpers'

class QuestionPage extends Component {
  render() {
    const { noMatch, showContent, results, dispatch } = this.props

    if (showContent === false) {
      return null
    }

    if (noMatch === true) {
      return <NoMatch />
    }

    return (
      <div>
        { results.answeredQuestion === true
          ? <QuestionResult results={results} />
          : <QuestionAnswer results={results} dispatch={dispatch} /> }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users, loadingBar }, props) {
  const { id } = props.match.params
  const question = questions ? questions[id] : undefined
  const noMatch = question === undefined
  const results = noMatch ? {} : formatQuestionResults(question, users[question.author], authedUser)

  return {
    noMatch,
    results,
    showContent: loadingBar ? (loadingBar.default === 0) : false,
  }
}

export default connect(mapStateToProps)(QuestionPage)
