import React, { Component } from 'react'

export default function QuestionResults(props) {
  const { name, avatar, id, optionOneText, optionTwoText, selectedOptionOne, selectedOptionTwo, optionOneVotes, optionTwoVotes, totalVotes, percentOptionOne, percentOptionTwo } = props.results
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
              <div>
                <h4> Would you rather {optionOneText}?</h4>
                <p> <strong>{percentOptionOne}%</strong> of answers with <strong> ({optionOneVotes} out of {totalVotes} votes)</strong> </p>
                <p>{selectedOptionOne ? "* you selected this answer" : ""}</p>
              </div>
              <div>
                <h4> Would you rather {optionTwoText}?</h4>
                <p> <strong>{percentOptionTwo}%</strong> of answers with <strong> ({optionTwoVotes} out of {totalVotes} votes)</strong> </p>
                <p>{selectedOptionTwo ? "* you selected this answer" : ""}</p>
              </div>
            </div>
          </div>
}
