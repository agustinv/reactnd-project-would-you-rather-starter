import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
  case SAVE_QUESTION_ANSWER:
    const qid = action.qid
    const answer = action.answer
    return {
              ...state,
              [qid]: {
                ...state[qid],
                [answer]: {
                  ...state[qid][answer],
                  votes: state[qid][answer].votes.concat([action.authedUser])
                }
              }
            }

  case ADD_QUESTION :
    return {
              ...state,
              [action.question.id]: action.question,
            }

    case RECEIVE_QUESTIONS :
      return {
                ...state,
                ...action.questions,
              }
    default :
      return state
  }
}
