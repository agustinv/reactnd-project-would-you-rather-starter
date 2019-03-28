import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoMatch from './NoMatch'
import QuestionResult from './QuestionResult'
import { formatQuestionResults } from '../utils/helpers'

class QuestionPage extends Component {
  render() {
    const { noMatch, showContent, results } = this.props

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
          : <span> Question Answer Form </span> }
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
    noMatch: noMatch,
    results: results,
    showContent: loadingBar ? (loadingBar.default === 0) : false
  }
}

export default connect(mapStateToProps)(QuestionPage)
