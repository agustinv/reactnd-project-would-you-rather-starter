import React from 'react'
import { handleSaveQuestionAnswer } from '../actions/questions'

class QuestionAnswer extends React.Component {
  state = {
    selectedOption: ''
  }
  submitAnswer = (e) => {
    e.preventDefault()
    const { dispatch, results } = this.props
    dispatch(handleSaveQuestionAnswer(results.id, this.state.selectedOption))
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  render() {
    const { name, avatar, optionOneText, optionTwoText } = this.props.results

    return (
      <div className='question'>
        <div className='question-header'>
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <div className="question-title">
            {name} asks:
          </div>
        </div>
        <div className='question-info'>
          <h2>Would you rather .. </h2>

          <form>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="optionOne"
                  checked={this.state.selectedOption === "optionOne"}
                  onChange={this.handleOptionChange}
                  /> {optionOneText}
              </label>
            </div>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="optionTwo"
                  checked={this.state.selectedOption === "optionTwo"}
                  onChange={this.handleOptionChange}
                /> {optionTwoText}
              </label>
            </div>
            <br/>
            <button
                className='btn'
                onClick={this.submitAnswer}
                disabled={this.state.selectedOption === ''}
                >Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default QuestionAnswer
