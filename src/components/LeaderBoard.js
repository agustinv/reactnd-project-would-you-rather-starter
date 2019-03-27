import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calculateUserScore, formatUserScore } from '../utils/helpers'

class LeaderBoard extends Component {
  render () {
    const { userScores } = this.props

    return (
      <div>
        <ul className='dashboard-list'>
          {userScores.map((user) => (
            <li>{user.id} {user.score}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const userScoresIds = Object.keys(users).sort((a,b) => calculateUserScore(users[b]) - calculateUserScore(users[a]))
  const userScores = users ? userScoresIds.map(id => formatUserScore(users[id])) : []

  return {
    userScores:  userScores
  }
}

export default connect(mapStateToProps)(LeaderBoard)
