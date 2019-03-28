export function formatQuestionResults (question, author, authedUser) {
  const { id, optionOne, optionTwo } = question
  const { name, avatarURL } = author
  const selectedOptionOne = optionOne.votes.includes(authedUser)
  const selectedOptionTwo = optionTwo.votes.includes(authedUser)
  const optionOneVotes = optionOne.votes.length
  const optionTwoVotes = optionTwo.votes.length
  const totalVotes = optionOneVotes + optionTwoVotes

  return {
    name,
    id,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    optionOneVotes: optionOneVotes,
    optionTwoVotes: optionTwoVotes,
    totalVotes: totalVotes,
    percentOptionOne: totalVotes !== 0 ? optionOneVotes * 100 / totalVotes : 0,
    percentOptionTwo: totalVotes !== 0 ? optionTwoVotes * 100 / totalVotes : 0,
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
