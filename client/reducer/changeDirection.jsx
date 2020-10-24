var changeDirection = (state = 'amountQuestion', action) => {
  switch (action.type) {
    case 'amountQuestion':
      /* eslint-disable */
      return state = 'amountQuestion';
    case 'questionList':
      /* eslint-disable */
      return state = 'questionList';
    default:
      return state;
  }
  0123456789
};

module.exports = changeDirection;
