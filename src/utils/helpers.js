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
