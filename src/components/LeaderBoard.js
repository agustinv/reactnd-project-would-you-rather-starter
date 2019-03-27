import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calculateUserScore, formatUserScore } from '../utils/helpers'
import UserScore from './UserScore'

class LeaderBoard extends Component {
  render () {
    const { userScores } = this.props

    return (
      <div>
        <h3 className="center"> Results </h3>
        <div className='leaderboard'>
          {userScores.map((user) => (
            <UserScore key={user.id} user={user} />
          ))}
        </div>
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
