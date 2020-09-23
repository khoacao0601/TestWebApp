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
};

module.exports = changeDirection;
012345
6789
