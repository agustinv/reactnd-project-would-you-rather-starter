export function formatQuestionSummary (question, author) {
  const { id, optionOne, optionTwo } = question
  const { name, avatarURL } = author

  return {
    name,
    id,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    avatar: avatarURL,
  }
}


export function formatUserScore (user) {
  const { id, name, answers, questions, avatarURL } = user
  const answered = Object.keys(answers).length
  const created = questions ? questions.length : 0
  return {
    id,
    name,
    avatar: avatarURL,
    answered: answered,
    created: created,
    score: (answered + created)
  }
}



export function calculateUserScore (user) {
  const { id, name, answers, questions, avatarURL } = user
  const answered = Object.keys(answers).length
  const created = questions ? questions.length : 0
  return answered + created
}
