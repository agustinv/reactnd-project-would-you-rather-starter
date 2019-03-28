import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  logoutUser = (e) => {
    e.preventDefault()

    this.props.dispatch(setAuthedUser(null))
  }
  render() {
    const { authedUser, user } = this.props
    const { name, avatarURL } = user
    return (
      <div className='container'>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/' className='link-item' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' className='link-item' activeClassName='active'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' className='link-item' activeClassName='active'>
                Leader Board
              </NavLink>
            </li>
            { authedUser === null
              ? null
              : <li className="fr">
                  <span> Hi, {name} </span>
                  <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                  />

                  <a href='/' className='link-item' onClick={this.logoutUser}>
                    Logout
                  </a>
                </li>}
          </ul>
        </nav>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users}) {
  const user = authedUser ? users[authedUser] : {}

  return {
    user: user,
    authedUser,
  }
}
export default connect(mapStateToProps)(Nav)
