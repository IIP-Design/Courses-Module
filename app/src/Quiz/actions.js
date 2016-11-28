import * as types from './actionTypes';


function formatQuiz(data) {
  const result = data.map((value) => {
    return value;
  })

  return result;
}


/*
 * Set quiz
 */

export function setQuiz(quiz) {
  return {
    type: types.SET_QUIZ,
    payload: {
      questions: formatQuiz(quiz)
    }
  };
}


/*
 * Add user answer to userAnswers
 */

export function answerQuestion(questionId) {
  const re = /^(q\d+)c(\d+)/;
  const match = questionId.match(re);

  return {
    type: types.ANSWER_QUESTION,
    payload:  {
      question: match[1],
      answer: match[2]
    }
  };
}

