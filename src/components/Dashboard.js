import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionSummary from './QuestionSummary'

class Dashboard extends Component {
  state = {
    showUnanswered: true,
  }
  showUnanswered = (e) => {
    this.setState(() => ({ showUnanswered: true }))
  }
  showAnswered = (e) => {
    this.setState(() => ({ showUnanswered: false }))
  }

  render () {
    const { showUnanswered } = this.state
    const { unansweredIds, answeredIds } = this.props
    const unansweredClass = showUnanswered ? 'active link-item' : 'link-item'
    const answeredClass = showUnanswered ? 'link-item' : 'active link-item'
    const questionsIds = showUnanswered ? unansweredIds : answeredIds

    return (
      <div>
        <header className='center'>
          <span className={unansweredClass} onClick={this.showUnanswered}>
            Unanswered
          </span>
          <span>&nbsp;&middot;&nbsp;</span>
          <span className={answeredClass} onClick={this.showAnswered}>
            Answered
          </span>
        </header>
        <div>
          {questionsIds.map((id) => (
            <QuestionSummary key={id} id={id}/>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const answeredIds = authedUser ? Object.keys(users[authedUser].answers) : []
  const unanswerIds = Object.keys(questions).filter((qid) => !answeredIds.includes(qid))

  return {
    unansweredIds: unanswerIds
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),

    answeredIds: answeredIds
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
