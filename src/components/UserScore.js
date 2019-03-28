import React from 'react'

export default function UserScore(props) {
  const { user } = props
  const { name, avatar, answered, created, score } = user

  return  <div className='question'>
            <div className='question-header'>
              <img
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
              />
              <div className="question-title">
                {name}
                <span className="score"> Score: {score}</span>
              </div>
            </div>
            <div className='question-info'>
              <div>
                <p> Answered Questions: {answered} </p>
                <p> Created Questions: {created} </p>
              </div>
            </div>
          </div>
}
