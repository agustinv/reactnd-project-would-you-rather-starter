import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class SignInForm extends Component {
  signIn = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(e.target.value))
  }

  render () {
   const { users, showContent } = this.props

   if ( showContent === false ) {
    return null
   }

   return  (
    <div className="center question">
      <div className='question-header'>
        <div className="question-title">
         Welcome to the Would You Rather APP!
        </div>
      </div>
      <div className='question-info'>
       <h3 className='center color-purple'>please sign in to continue</h3>
       <form className='signin'>
        <select value="selectOne" onChange={this.signIn} >
          <option key="select" value="selectOne" disabled>Sign In...</option>
          { users.map((u) => (
             <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>
       </form>
      </div>
    </div>
   )
  }
}

function mapStateToProps({ users, loadingBar }) {
  return {
    users: users ? Object.keys(users).map((id) => users[id]) : [],
    showContent: loadingBar ? (loadingBar.default === 0) : false
  }
}
export default connect(mapStateToProps)(SignInForm)
