function checkEmptyAnswer(item) {
  return { type: 'addStatus', item };
}

function checkEmptyAnswerMinus(index) {
  return { type: 'remove', index };
}

function resetAnswerStatusArray() {
  return { type: 'reset' };
}

module.exports = { checkEmptyAnswer, checkEmptyAnswerMinus, resetAnswerStatusArray };
