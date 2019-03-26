import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    const unansweredClass = showUnanswered ? 'active' : ''
    const answeredClass = showUnanswered ? '' : 'active'
    const questionsIds = showUnanswered ? unansweredIds : answeredIds

    return (
      <div>
        <header className='dashboard-list'>
          <ul>
            <li className={unansweredClass} onClick={this.showUnanswered}>
              Unanswered
            </li>
            <li className={answeredClass} onClick={this.showAnswered}>
              Answered
            </li>
          </ul>
        </header>
        <ul className='dashboard-list'>
          {questionsIds.map((id) => (
            <li key={id} >{id}</li>
          ))}
        </ul>
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
