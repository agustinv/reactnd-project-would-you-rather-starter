import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }
  handleOptionOneChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
     optionOne: text
    }))
  }
  handleOptionTwoChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
     optionTwo: text
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }))
  }
  render() {
    const { optionOne, optionTwo, toHome } = this.state
    const { showContent } = this.props

    if (toHome === true && showContent === true) {
      return <Redirect to='/' />
    }

    if (showContent === false) {
      return null
    }

    return (
      <div>
        <h3 className='center'>Create New Question</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Option One Text Here"
            value={optionOne}
            onChange={this.handleOptionOneChange}
            className='options-input'
          />
          <h4 className='center'> - OR - </h4>
          <input
            placeholder="Enter Option Two Text Here"
            value={optionTwo}
            onChange={this.handleOptionTwoChange}
            className='options-input'
          />
          <button
            className='btn'
            type='submit'
            disabled={optionTwo === '' || optionOne === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    showContent: loadingBar ? (loadingBar.default === 0) : false
  }
}
export default connect(mapStateToProps)(NewQuestion)
