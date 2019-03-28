import React from 'react'

export default function QuestionResults(props) {
  const { name, avatar, optionOneText, optionTwoText, selectedOptionOne, selectedOptionTwo, optionOneVotes, optionTwoVotes, totalVotes, percentOptionOne, percentOptionTwo } = props.results

  const optOneCss = selectedOptionOne ? 'box-purple bg-purple-light' : 'box-purple'
  const optTwoCss = selectedOptionTwo ? 'box-purple bg-purple-light' : 'box-purple'

  return   <div className='question'>
            <div className='question-header'>
              <img
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
              />
              <div className="question-title">
                Asked by {name}
              </div>
            </div>
            <div className='question-info'>
              <h2>Results: </h2>
              <div className={optOneCss}>
                <h4> Would you rather {optionOneText}?</h4>
                <p> <strong>{percentOptionOne}%</strong> of answers with <strong> ({optionOneVotes} out of {totalVotes} votes)</strong> </p>
                <p className='color-purple'>{selectedOptionOne ? "* you selected this answer" : ""}</p>
              </div>
              <div className={optTwoCss}>
                <h4> Would you rather {optionTwoText}?</h4>
                <p> <strong>{percentOptionTwo}%</strong> of answers with <strong> ({optionTwoVotes} out of {totalVotes} votes)</strong> </p>
                <p className='color-purple'>{selectedOptionTwo ? "* you selected this answer" : ""}</p>
              </div>
            </div>
          </div>
}
