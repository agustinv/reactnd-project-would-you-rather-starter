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

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3 className='center'>Create New Question</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Enter Option One Text Here"
            value={optionOne}
            onChange={this.handleOptionOneChange}
            className='textarea'
          />
          <h4 className='center'> - OR - </h4>
          <textarea
            placeholder="Enter Option Two Text Here"
            value={optionTwo}
            onChange={this.handleOptionTwoChange}
            className='textarea'
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

export default connect()(NewQuestion)
