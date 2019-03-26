import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatQuestionSummary } from '../utils/helpers'

class QuestionSummary extends Component {
  render() {
    const { summary } = this.props
    if (summary === null) {
      return <p>This question doesnt exist</p>
    }
    const {
      name, avatar, id, optionOneText, optionTwoText
    } = summary

    return (
      <div className='question'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='question-info'>
          <div>
            <span>
              <strong>{name} asks: </strong>
              <em>Would you rather?</em>
            </span>
            <br/>
            <p>
              ... {optionOneText} ...
              <strong>or</strong>
              ... {optionTwoText} ...
            </p>
            <Link to={`/questions/${id}`} className='question-link'>
                View Poll
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, { id }) {
  const question = questions[id]

  return {
    summary: question
      ? formatQuestionSummary (question, users[question.author])
      : null
  }
}

export default connect(mapStateToProps)(QuestionSummary)
