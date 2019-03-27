import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUserScores } from '../utils/helpers'
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

function mapStateToProps({ users, questions }) {
  const userScoresNew = users ? Object.keys(users).map(id => formatUserScores(users[id], questions)) : []

  return {
    userScores:  userScoresNew.sort((a,b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(LeaderBoard)
