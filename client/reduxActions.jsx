// Check Empty Answer before going to the next Question
function checkEmptyAnswer(item) {
  return { type: 'addStatus', item };
}

function checkEmptyAnswerMinus(index) {
  return { type: 'remove', index };
}

function resetAnswerStatusArray() {
  return { type: 'reset' };
}

// Change View Actions
function changeDirection(item) {
  return { type: 'direction', item };
}

function changeDirectionToQuestionList(item) {
  return { type: 'questionList', item };
}

// Amount of Questions, you wan to take a test
function questionsAmount(item) {
  return { type: 'amount', item };
}

module.exports = {
  checkEmptyAnswer,
  checkEmptyAnswerMinus,
  resetAnswerStatusArray,
  changeDirection,
  changeDirectionToQuestionList,
  questionsAmount
};
