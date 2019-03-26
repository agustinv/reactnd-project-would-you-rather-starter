export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveUsers (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
