export function formatQuestionResults (question, author, authedUser) {
  const { id, optionOne, optionTwo } = question
  const { name, avatarURL } = author
  const selectedOptionOne = optionOne.votes.includes(authedUser)
  const selectedOptionTwo = optionTwo.votes.includes(authedUser)

  return {
    name,
    id,
    optionOneText: optionOne.text,
    optionOneVotes: optionOne.votes.length,
    optionTwoText: optionTwo.text,
    optionTwoVotes: optionTwo.votes.length,
    selectedOptionOne: selectedOptionOne,
    selectedOptionTwo: selectedOptionTwo,
    answeredQuestion: selectedOptionOne || selectedOptionTwo,
    avatar: avatarURL,
  }
}

export function formatUserScores (user, questions) {
  const { id, name, avatarURL } = user
  let answered = 0
  let created = 0
  for (const entry of Object.entries(questions)) {
    const { author, optionOne, optionTwo } = entry[1]
    if (author === id) { created++ }
    if (optionOne.votes.includes(id)) { answered++ }
    if (optionTwo.votes.includes(id)) { answered++ }
  }
  return {
    id,
    name,
    avatar: avatarURL,
    answered: answered,
    created: created,
    score: (answered + created)
  }
}
