var questionsAmount = (state = '', action) => {
  switch (action.type) {
    case 'amount':
      /* eslint-disable */
      return state = action.item;
    default:
      return state;
  }
};

module.exports = questionsAmount;
